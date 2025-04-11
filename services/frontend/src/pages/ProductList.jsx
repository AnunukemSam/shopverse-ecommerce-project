import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

