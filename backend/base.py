from flask import Flask, request

# RESOURCE - TODO - https://javascript.plainenglish.io/sending-a-post-to-your-flask-api-from-a-react-js-app-6496692514e

api = Flask(__name__)
db = SQLAlchemy(api)

class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(1000))

@api.route('/sendmail', methods=['POST'])
def send_messages():

    received_messages = request.get_json()
    new_messages = Messages(content=new_messages['content'])

    print("hello!!!!!")
    response_body = {
        "name": "Rachael Jeon",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body