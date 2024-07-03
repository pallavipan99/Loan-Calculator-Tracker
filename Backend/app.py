from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Loan Tracker!"

@app.route("/calculate")
def calculate():
    return "Loan calculation placeholder"

@app.route("/payments")
def payments():
    return "Payment tracking placeholder"

loans = []

@app.route("/add_loan", methods=["POST"])
def add_loan():
    from flask import request, jsonify
    data = request.json
    loans.append(data)
    return jsonify({"message": "Loan added", "loan": data})

payments_list = []

@app.route("/add_payment", methods=["POST"])
def add_payment():
    from flask import request, jsonify
    data = request.json
    payments_list.append(data)
    return jsonify({"message": "Payment added", "payment": data})

def calculate_interest(principal, rate, term):
    return principal * rate / 100 * term / 12
