import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaystackPop from '@paystack/inline-js';
import './PaystackPayment.css'; // Ensure you have a CSS file for styling

const PaystackPayment = () => {
  const location = useLocation();
  const { amount, currency } = location.state || {};
  const [email, setEmail] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/create-paystack-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          amount: amount * 100, // Convert to kobo if NGN
          currency: currency, // Use the passed currency
        }),
      });

      const transactionData = await response.json();

      const paystack = new PaystackPop();

      paystack.newTransaction({
        ...transactionData,
        onSuccess: (response) => {
          alert('Payment successful. Transaction ref is ' + response.reference);
        },
        onCancel: () => {
          alert('Payment was not completed.');
        },
      });
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Complete Your Payment</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <div className="amount-display">
            <span>{`${currency} ${amount.toLocaleString()}`}</span>
          </div>
        </div>
        <button type="submit" className="pay-button">Pay Now</button>
      </form>
    </div>
  );
};

export default PaystackPayment;