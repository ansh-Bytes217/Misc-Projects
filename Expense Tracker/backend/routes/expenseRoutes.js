const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Create a new expense
router.post('/add', async (req, res) => {
  const { amount, category, description } = req.body;

  if (!amount || !category) {
    return res.status(400).json({ message: 'Amount and category are required' });
  }

  try {
    const newExpense = new Expense({
      amount,
      category,
      description,
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find(); // Get all expenses from the database
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});


router.get('/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const expenses = await Expense.find({ category }); // Filter by category
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Delete an expense by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Update an expense by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { amount, category, description } = req.body;

  try {
    const expense = await Expense.findByIdAndUpdate(
      id,
      { amount, category, description },
      { new: true } 
    );

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
