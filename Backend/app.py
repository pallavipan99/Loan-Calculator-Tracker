from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Loan Tracker!"

@app.route("/calculate")
def calculate():
    return "Loan calculation placeholder"
