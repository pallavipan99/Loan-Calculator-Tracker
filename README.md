# Loan Calculator & Tracker

A robust full-stack financial application that enables users to **create loans, track payments, and visualize amortization schedules**, including optional **extra monthly payments** and **one-off extra payments**. Built with a modern Python backend and a responsive React frontend.

---

## **Key Features**

- **Loan Management:** Create, edit, and delete loans with all essential financial parameters.
- **Amortization Schedules:** View detailed monthly breakdowns of principal, interest, and balance.
- **Extra Payments:** Support for recurring extra monthly payments or one-time additional payments.
- **Payment Tracking:** Log payments to reduce principal and update the loan schedule dynamically.
- **Full CRUD API:** RESTful endpoints for all loan and payment operations.
- **Frontend Integration:** React interface powered by Vite, communicating seamlessly with the backend.

---

## **Tech Stack**

| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Backend  | Python, Flask, SQLAlchemy, SQLite  |
| Frontend | React, Vite, JavaScript, HTML, CSS |
| Database | SQLite (local development)         |
| API      | RESTful endpoints                  |

---

## **Quick Start**

### **1. Start the Backend**

```bash
cd backend
python -m venv venv
# mac/linux
source venv/bin/activate
# windows
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

- API runs at: `http://localhost:5001`
- Creates `app.db` with empty tables automatically

### **2. Start the Frontend**

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

- Vite will display a local URL (typically `http://localhost:5173`)
- The frontend proxies API requests to the Flask backend automatically

---

## **API Endpoints**

| Method | Endpoint                                  | Description                                                                         |
| ------ | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| GET    | `/api/health`                             | Check API health                                                                    |
| GET    | `/api/loans`                              | List all loans                                                                      |
| POST   | `/api/loans`                              | Create a new loan (`name`, `principal`, `annual_rate`, `term_months`, `start_date`) |
| PUT    | `/api/loans/<id>`                         | Update loan details                                                                 |
| DELETE | `/api/loans/<id>`                         | Delete a loan                                                                       |
| GET    | `/api/loans/<id>/schedule?extraMonthly=0` | Get amortization schedule with optional extra monthly principal                     |
| GET    | `/api/loans/<id>/payments`                | List all one-off extra payments                                                     |
| POST   | `/api/loans/<id>/payments`                | Add a one-off extra payment (`date`, `amount`)                                      |
| DELETE | `/api/payments/<payment_id>`              | Delete a payment                                                                    |

---

## **Usage Notes**

- **Monthly Interest Calculation:** Applied starting from the loan `start_date` for each month
- **Extra Monthly Payments:** Optional, applied to reduce principal faster
- **One-Off Payments:** Applied in the month matching the provided `date`
- **Amortization Display:** Dynamically updates when new payments are added

---

## **Future Improvements**

- Integrate user authentication and multi-user support
- Support persistent database options like PostgreSQL or MongoDB for production
- Add export functionality for schedules and payments (CSV/PDF)
- Visual charts for loan progress and interest over time
- Enhanced frontend features for editing and deleting loans/payments directly from the UI

---

## **Acknowledgements**

This project demonstrates **full-stack development skills**, including:

- Backend API design with Python and Flask
- Database modeling with SQLAlchemy
- Frontend development with React and Vite
- Connecting frontend to backend via RESTful APIs
- Implementing financial calculations for loans and amortization

