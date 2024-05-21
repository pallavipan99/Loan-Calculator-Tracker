class Loan:
    def __init__(self, name, principal, interest_rate, term_months):
        self.name = name
        self.principal = principal
        self.interest_rate = interest_rate
        self.term_months = term_months

class Payment:
    def __init__(self, loan_id, amount, date):
        self.loan_id = loan_id
        self.amount = amount
        self.date = date
