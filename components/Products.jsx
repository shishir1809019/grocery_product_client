"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './Product';
import ProductModal from './ProductModal';

function Products({products}) {

  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Our All Grocery Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </div>
  );
}

export default Products;
