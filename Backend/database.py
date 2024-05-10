import sqlite3

def get_connection():
    conn = sqlite3.connect("loan_tracker.db")
    return conn
