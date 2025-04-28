const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();


const app = express();

// Middleware to parse the JSON data
app.use(express.json());

// Enable CORS for frontend communication
app.use(cors());

// Set up the route for managing expenses
app.use('/api/expenses', expenseRoutes);

// Connect to MongoDB using the URI 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
