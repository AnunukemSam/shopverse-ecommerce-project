import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">ShopVerse</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-500">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-500">Cart</Link>
          <Link to="/checkout" className="text-gray-700 hover:text-blue-500">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}
