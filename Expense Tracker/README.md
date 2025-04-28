Expense Tracker


Welcome to the Expense Tracker application! 🎉
This simple web app lets you keep track of your expenses,
helping you to manage your finances better. You can add, view, and categorize your expenses in just a few clicks.

Features
Add Expenses: Quickly add your expenses with details like amount, category, and an optional description.

View Expenses: View a list of all your expenses, categorized for better insight into your spending.

Modern Design: Clean, minimal, and easy-to-use interface.

Tech Stack
Frontend:

HTML, CSS, and JavaScript (Vanilla)

Backend:

Node.js with Express.js

MongoDB for storing expenses

Tools:

Postman or any API testing tool for backend testing

Nodemon (for auto-reloading during development)

Getting Started
1. Clone the Repository
Start by cloning this repository to your local machine:

bash
Copy
Edit
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2. Backend Setup
Install Dependencies
Navigate to the backend folder and install the required dependencies:

bash
Copy
Edit
cd backend
npm install
Set Up Environment Variables
Create a .env file in the backend/ directory and add your MongoDB URI:

txt
Copy
Edit
MONGO_URI=your_mongo_database_uri_here
Run the Backend
Once everything is set up, start the server:

bash
Copy
Edit
npm run dev
This will run the backend on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend/ directory and open index.html in your browser.

If you're working with live server tools (VS Code extensions), you can open the folder and start the live server to view it locally.

Usage
Add Expenses
Simply fill out the form with the amount, category, and optional description.

Click Add Expense, and your expense will be added to the list!

View Expenses
All the expenses you add will appear in the list below the form.

You can categorize your expenses, and each expense will display the amount, category, and description (if available).

API Documentation
For anyone who wants to work with the backend API:

1. POST /api/expenses/add
Description: Adds a new expense.

Request Body:

json
Copy
Edit
{
  "amount": 50,
  "category": "Food",
  "description": "Lunch at the cafe"
}
Response: Returns the newly created expense object.

2. GET /api/expenses
Description: Fetches all expenses.

Response: A list of all expense objects.

3. GET /api/expenses/category/:category
Description: Fetches expenses filtered by category.

Response: A list of expenses that match the given category.

Contributing
If you'd like to contribute to the development of this app, feel free to fork this repository and submit a pull request. You can improve features, fix bugs, or suggest new ones.

Steps for Contribution:
Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -m 'Added feature').

Push to your fork (git push origin feature-branch).

Submit a pull request!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Special thanks to Express.js for providing a minimal yet powerful framework to build the backend.

MongoDB for being a flexible database solution.

