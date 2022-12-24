from flask import Flask, request, jsonify
from flask.wrappers import Response
from flask_pymongo import PyMongo
import pymongo
import json
import pandas as pd
from bson import ObjectId, json_util
from flask_cors import CORS, cross_origin

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
# movies_metadata = pd.read_csv('./assets/small_movies_metadata.csv')
# cosine_sim = pd.read_csv('./assets/consine_sim.csv', sep=',', header=None)
# titles = movies_metadata['title']


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


# Get movie recommendations, Example: localhost:80/movies/recommend/?id=2
@app.route('/movies/recommend/', methods=['GET'])
def getMovieRecommendations():
    try:
        id = request.args.get('id', default=1, type=int)

        return Response(
            response=get_recommendations(
                id, cosine_sim, titles).head(10).to_json(),
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
@app.route('/users', methods=['POST'])
def saveUser():
    try:
        data = request.json
        userName = data['userName']
        email = data['email']
        password = data['password']
        # if (userName is None or email is None or password is None):
        #     return Response(
        #         response=json_util.dumps(
        #             {"message": "Not enough field value for user"}),
        #         status=500,
        #         mimetype="application/json")
        # else:
        existingUser = db.users.find({"email": email})

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
@app.route("/users", methods=["GET"])
def getUser():
    try:
        date = request.json
        email = request.json["email"]
        password = request.json["password"]

        existingUser = list(db.users.find({"email": email}))[0]

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


# run app
if __name__ == "__main__":
    app.run(port=80, debug=True)

    # DB_URI = mongodb+srv://ltnhan:thanhnhan@cluster0.9mhwj.mongodb.net/Movies
