require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module
const ngrok = require('ngrok');

const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
const PAYSTACK_PUBLIC_KEY = process.env.PAYSTACK_PUBLIC_KEY;

app.use(bodyParser.json());
app.use(cors({ origin: 'https://tegafatee.onrender.com' }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API route for Paystack transaction
app.post('/create-paystack-transaction', (req, res) => {
  const { email, amount } = req.body;

  const transactionData = {
    key: PAYSTACK_PUBLIC_KEY, // Your Paystack public key
    email: email, // Customer's email from frontend
    amount: amount, // Amount in kobo (amount should be already in kobo)
    currency: 'NGN', // Currency (NGN, USD, etc.)
    ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference number
  };

  // Send the transaction data to the client
  res.json(transactionData);
});

// Catch-all handler to return the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server and ngrok tunnel
(async function() {
  try {
    const url = await ngrok.connect({
      authtoken: process.env.NGROK_AUTHTOKEN,
      addr: PORT  // The port your server is running on
    });
    console.log(`ngrok tunnel started at: ${url}`);
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting ngrok:', error);
  }
})();