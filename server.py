from flask import Flask, request, jsonify
from flask.wrappers import Response
from flask_pymongo import PyMongo
import pymongo
import json
import pandas as pd
from bson import ObjectId, json_util
from flask_cors import CORS, cross_origin
import urllib.request

from recommend import get_recommendations


app = Flask(__name__)
CORS(app)

try:
    app.config["MONGO_URI"] = "mongodb+srv://ltnhan:thanhnhan@cluster0.9mhwj.mongodb.net/Movies"
    mongo = PyMongo(app)
    db = mongo.db
except:
    print("ERROR - Cannot connect to db")

# read csv files
movies_metadata = pd.read_csv('./assets/small_movies_metadata.csv')
titles = movies_metadata['title']


# Get movies in home screen, Example:
@app.route("/movies/home", methods=["GET"])
def getMoviesInHome():
    try:
        dbResponse = list(db.movie_metadatas.find(
            {}).sort("release_date", -1).limit(20))

        if not dbResponse:
          raise Exception("Not found movies!")

        return Response(
            response=json_util.dumps(dbResponse),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print("###############################################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Get home movies failed"}),
            status=500,
            mimetype="application/json"
        )


# Get movie info by id, Example: localhost:80/movies?id=862
@app.route("/movies", methods=["GET"])
def getMovieById():
    try:
        id = request.args.get('id', default=1, type=int)
        query = {"id": id}
        dbResponse = db.movie_metadatas.find_one(query)

        if pd.isnull(dbResponse):
            dbResponse = {"message": "Movie with id "+f"{id}"+" not exits!"}

        return Response(
            response=json_util.dumps(dbResponse),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print("###############################################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Cannot get movie with id "+f"{id}"}),
            status=500,
            mimetype="application/json"
        )


# Search movie, Example: localhost:80/movies/search?name=862
@app.route('/movies/search', methods=['GET'])
def searchMovies():
    try:
        name = request.args.get('name', default="")
        query = {"title": {"$regex": f"{name}"}}
        dbResponse = db.movie_metadatas.find(query)
        return Response(
            response=json_util.dumps(dbResponse),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print("##########################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Cannot search movies"}),
            status=500,
            mimetype="application/json"
        )


# Get movie recommendations, Example: localhost:80/movies/recommend?id=1
@app.route('/movies/recommend', methods=['GET'])
def getMovieRecommendations():
    try:
        id = request.args.get('id', default=1, type=int)
        recommendations = get_recommendations(id)
        query = {"id": {"$in": recommendations['movieId'].to_list()}}
        dbResponse = db.movie_metadatas.find(query).limit(20)
        # result = movies_metadata[movies_metadata["id"].isin(recommendations['movieId'])].head(20)
        
        return Response(
            # response=result.to_json(orient='records'),
            response=json_util.dumps(dbResponse),
            status=200,
            mimetype='application/json'
        )
    except Exception as ex:
        print("##########################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Cannot get movie recommendation"}),
            status=500,
            mimetype="application/json"
        )


# Save user when sign up or first time login, Example: localhost:80/users
# {
#     "userName": "Third User",
#     "email": "third_user@gmail.com",
#     "password": "123123123"
# }
@app.route('/register', methods=['POST'])
def saveUser():
    try:
        data = request.form
        userName = data['username']
        email = data['email']
        password = data['psw']
        # if (userName is None or email is None or password is None):
        #     return Response(
        #         response=json_util.dumps(
        #             {"message": "Not enough field value for user"}),
        #         status=500,
        #         mimetype="application/json")
        # else:
        existingUser = db.users.find_one({"email": email})

        if (existingUser):
            raise Exception("User already exits")

        userLatest = list(db.users.find({}).sort("userId", -1).limit(1))[0]
        dbResponse = db.users.insert_one({
            "userName": userName,
            "userId": userLatest["userId"]+1,
            "email": email,
            "password": password})
        return Response(
            response=json_util.dumps({"message": "User created successfully",
                                      "id": f"{dbResponse.inserted_id}"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print("##########################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Create user failed"}),
            status=500,
            mimetype="application/json"
        )


# Get user data for login, Example localhost:80/users
# {
#     "email": "third_user@gmail.com",
#     "password": "123123123"
# }
@app.route("/login", methods=["POST"])
def getUser():
    try:
        print(request.form)
        data = request.json
        email = data["email"]
        password = data["password"]

        existingUser = db.users.find_one({"email": email})

        if (existingUser["password"] != password):
            raise Exception("Password not match")

        userId = existingUser["userId"]
        userName = existingUser["userName"]

        return Response(
            response=json_util.dumps({"message": "Login successfully!",
                                      "userName": f"{userName}",
                                      "userId": f"{userId}"}),
            status=200,
            mimetype="application/json"
        )

    except Exception as ex:
        print("##########################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Login failed"}),
            status=500,
            mimetype="application/json"
        )


@app.route('/vote', methods=['POST'])
def vote():
    try:
        data = request.json
        print(data)
        userId = int(data["userId"])
        movieId = int(data["movieId"])
        rating = int(data["rating"])
        dbResponse = db.ratings.insert_one({
            "userId": userId,
            "movieId": movieId,
            "rating": rating
        })
        return Response(
            response=json_util.dumps({"message": "voted successfully",
                                      "id": f"{dbResponse.inserted_id}"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print("##########################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Failed to update data"}),
            status=500,
            mimetype="application/json"
        )


@app.route('/update', methods=['POST'])
def updateData():
    try:
        data = request.json
        if data['key'] == "cloudComputing":
            urllib.request.urlretrieve("https://dlsgen2account418.dfs.core.windows.net/filesystem/data/ratings.csv?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2022-12-26T21:57:45Z&st=2022-12-18T13:57:45Z&sip=0.0.0.0-255.255.255.255&spr=https,http&sig=iIpznkkWLsp6NQ9K19xniuv0WiNUDZBj%2Fg3Tsx%2B7uQ8%3D", "./assets/ratings.csv")
            urllib.request.urlretrieve("https://dlsgen2account418.dfs.core.windows.net/filesystem/result/similarities.csv?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2022-12-26T21:57:45Z&st=2022-12-18T13:57:45Z&sip=0.0.0.0-255.255.255.255&spr=https,http&sig=iIpznkkWLsp6NQ9K19xniuv0WiNUDZBj%2Fg3Tsx%2B7uQ8%3D", "./assets/similarities.csv")
        
        return Response(
            response=json_util.dumps({"message": "Updated"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print("##########################################")
        print(ex)

        return Response(
            response=json.dumps(
                {"message": "Failed to update data"}),
            status=500,
            mimetype="application/json"
        )

# run app
if __name__ == "__main__":
    app.run(port=80, debug=True)

    # DB_URI = mongodb+srv://ltnhan:thanhnhan@cluster0.9mhwj.mongodb.net/Movies
