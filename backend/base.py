from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# RESOURCE - TODO - https://javascript.plainenglish.io/sending-a-post-to-your-flask-api-from-a-react-js-app-6496692514e

app = Flask(__name__)
db = SQLAlchemy(app)

@app.route('/', methods = ['GET'])
def test():
    return jsonify({"hello": "world"})


if __name__ == "__main__":
    app.run(debug=True)

# class Todo(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     content = db.Column(db.String)

# @api.route('/add_todo', methods=['POST'])
# def add_todo():
#     todo_data = request.get_json()
#     new_todo = Todo(content=todo_data['content'])
#     db.session.add(new_todo)
#     db.session.commit()
#     return 'Done', 201

# api.run()
# class Messages(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     content = db.Column(db.String(1000))

# @api.route('/sendmail', methods=['POST'])
# def send_messages():

#     received_messages = request.get_json()
#     new_messages = Messages(content=new_messages['content'])

#     print("hello!!!!!")
#     response_body = {
#         "name": "Rachael Jeon",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body