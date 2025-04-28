const mongoose = require('mongoose');

// Define the Expense scheme
const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,         // Expense amount (e.g., 100.50)
    required: true,      
  },
  category: {
    type: String,         // Category of the expense (e.g., 'Food', 'Rent')
    required: true,       
  },
  description: {
    type: String,         // Optional description of the expense
    default: '',         
  },
  date: {
    type: Date,           // Date when the expense was made
    default: Date.now,    // Default to the current date if not specified
  },
});


const Expense = mongoose.model('Expense', expenseSchema);

// Export the model so it can be used in other files
module.exports = Expense;
