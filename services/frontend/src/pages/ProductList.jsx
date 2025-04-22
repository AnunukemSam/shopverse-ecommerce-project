import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);

const API_BASE = import.meta.env.VITE_API_BASE_URL;

useEffect(() => {
  axios.get(`${API_BASE}/api/products`)
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
}, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p._id} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg text-gray-900">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.description}</p>
            <p className="text-blue-600 font-semibold mt-2">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

