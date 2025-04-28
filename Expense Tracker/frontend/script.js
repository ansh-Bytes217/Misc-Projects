const form = document.getElementById('expense-form');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const descriptionInput = document.getElementById('description');
const expenseList = document.getElementById('expense-ul');

// API URL (backend endpoint)
const API_URL = 'http://localhost:5000/api/expenses';

// Fetch and display all expenses
async function fetchExpenses() {
  try {
    const response = await fetch(API_URL);
    const expenses = await response.json();
    expenseList.innerHTML = ''; 
    
    expenses.forEach(expense => {
      const expenseItem = document.createElement('li');
      expenseItem.innerHTML = `
        <span>$${expense.amount}</span>
        <div class="category">${expense.category}</div>
        <div class="description">${expense.description || 'No description'}</div>
      `;
      expenseList.appendChild(expenseItem);
    });
  } catch (error) {
    console.error('Error fetching expenses:', error);
  }
}

// Add a new expense
async function addExpense(e) {
  e.preventDefault();

  const amount = amountInput.value;
  const category = categoryInput.value;
  const description = descriptionInput.value;

  if (!amount || !category) {
    alert('Amount and Category are required.');
    return;
  }

  try {
    const response = await fetch(API_URL + '/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, category, description })
    });

    if (response.ok) {
      fetchExpenses(); // Refresh the expense list after adding a new expense
      form.reset(); 
    } else {
      alert('Failed to add expense');
    }
  } catch (error) {
    console.error('Error adding expense:', error);
  }
}

// Event listener for form submission
form.addEventListener('submit', addExpense);

// Initial fetch to load existing expenses
fetchExpenses();
