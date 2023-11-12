import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to the payForHealthPackage endpoint
      const response = await axios.post('http://localhost:8000/payForHealthPackage', {
        Username: username,
        PaymentMethod: paymentMethod,
      });

      // Handle the response
      console.log(response.data);

      if (paymentMethod === 'cash') {
        setSuccessMessage('Payment successful!');
      } else if (paymentMethod === 'credit') {
        // Redirect to the credit card information page
        window.location.href = '/credit-card-info'; // Replace with the actual URL of the credit card information page
      }
    } catch (error) {
      // Handle errors, you may want to display an error message to the user
      console.error('Error:', error.message);
    }

    // Reset form fields
    setUsername('');
    setPaymentMethod('cash');
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="cash">Cash</option>
          <option value="credit">Credit Card</option>
        </select>

        <button type="submit">Submit Payment</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default PaymentForm;
