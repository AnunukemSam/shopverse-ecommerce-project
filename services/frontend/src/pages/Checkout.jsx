import React, { useState } from 'react';
import axios from 'axios';

export default function Checkout() {
  const API_PAYMENT = import.meta.env.VITE_API_PAYMENT;
  const [status, setStatus] = useState(null);

  const handlePayment = () => {
    axios.post(`${API_PAYMENT}/api/payment`, {
      amount: 5000, // example value
      currency: 'USD',
      method: 'card',
    })
    .then(res => {
      setStatus('Payment successful! 🎉');
    })
    .catch(err => {
      console.error('Payment error:', err);
      setStatus('Payment failed 💔');
    });
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold text-gray-800">Checkout 💳</h2>
      <p className="text-gray-600 mb-4">Click the button to simulate payment.</p>
      <button 
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Pay Now
      </button>
      {status && <p className="mt-4 text-lg font-medium">{status}</p>}
    </div>
  );
}

