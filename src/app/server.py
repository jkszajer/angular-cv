# server.py
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/sendMessage', methods=['POST'])
def receive_message():
    message_content = request.get_json()
    print(message_content)
    return message_content, 200

if __name__ == '__main__':
    app.run(port=8080)