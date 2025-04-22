import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
  const API_CART = import.meta.env.VITE_API_CART;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_CART}/api/cart`)
      .then(res => setCartItems(res.data))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map(item => (
            <li key={item._id} className="bg-white shadow p-4 rounded">
              <p className="font-semibold">{item.productName}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

