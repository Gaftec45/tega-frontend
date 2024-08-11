import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const AlreadyMade = () => {
  const [email, setEmail] = useState('');

  const handlePayment = async (planAmount) => {
    // if (!email) {
    //   alert('Please enter your email');
    //   return;
    // }

    try {
      const response = await fetch('http://localhost:5000/create-paystack-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          amount: planAmount * 100, // Amount in kobo
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }

      const transactionData = await response.json();

      const paystack = new PaystackPop();  // Use the new PaystackPop() initialization

      paystack.newTransaction({
        key: transactionData.key,
        email: transactionData.email,
        amount: transactionData.amount,
        currency: transactionData.currency,
        ref: transactionData.ref,
        onSuccess: (response) => {
          alert('Payment successful. Transaction ref is ' + response.reference);
        },
        onCancel: () => {
          alert('Payment was not completed.');
        }
      });

    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div id="already-made">
      <h1>Choose Your Plan</h1>
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
      />
      <div>
        <h2>Basic Plan</h2>
        <p>Price: ₦2,000</p>
        <button onClick={() => handlePayment(2000)}>Choose Basic Plan</button>
      </div>
      <div>
        <h2>Standard Plan</h2>
        <p>Price: ₦5,000</p>
        <button onClick={() => handlePayment(5000)}>Choose Standard Plan</button>
      </div>
    </div>
  );
}

export default AlreadyMade;