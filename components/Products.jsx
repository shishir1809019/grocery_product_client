"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './Product';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:8000/';

    // Make a GET request to fetch data from the Django API
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Our All Grocery Products</h1>
      <div class="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </div>
  );
}

export default Products;
