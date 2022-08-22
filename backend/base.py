from flask import Flask

api = Flask(__name__)

@api.route('/sendmail')
def my_profile():
    print("hello!!!!!")
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body