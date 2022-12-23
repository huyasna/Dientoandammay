from flask import Flask, request
from flask.wrappers import Response
import pymongo
import json
from bson.objectid import ObjectId

app = Flask(__name__)

try:
    mongo = pymongo.MongoClient(
        host="localhost", port=27017, serverSelectionTimeoutMS=100)
    db = mongo.pymongoTest
    mongo.server_info()  # trigger exception if cannot connect to db
except:
    print("ERROR - Cannot connect to db")


@app.route("/get", methods=["GET"])
def get_user():
    try:
        data = list(db.users.find())
        for user in data:
            user["_id"] = str(user["_id"])
        return Response(
            response=json.dumps(data),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "cannot get user"}),
            status=500,
            mimetype="application/json"
        )


@app.route("/add", methods=["POST"])
def create_user():
    try:
        user = {"name": request.form["name"],
                "lastname": request.form["lastName"]}
        dbResponse = db.users.insert_one(user)
        print(dbResponse.inserted_id)
        # for attr in dir(dbResponse):
        #   print(attr)
        return Response(
            response=json.dumps({"message": "user created",
                                 "id": f"{dbResponse.inserted_id}"}),
            status=200,
            mimetype="application/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "cannot create user"}),
            status=500,
            mimetype="application/json"
        )


@app.route("/update/<id>", methods=["PUT"])
def update_user(id):
    try:
        dbResponse = db.users.update_one(
            {"id": ObjectId(id)},
            {"$set": {"name": request.form["name"]}}
        )
        return Response(
            response=json.dumps({"message": "Failed to updated user"}),
            status=200,
            content_type="application/json"
        )
    except Exception as ex:
        return Response(
            response=json.dumps({"message": "Failed to updated user"}),
            status=500,
            content_type="application/json"
        )


# run app
if __name__ == "__main__":
    app.run(port=80, debug=True)

    # DB_URI = mongodb+srv://ltnhan:thanhnhan@cluster0.9mhwj.mongodb.net/Movies
