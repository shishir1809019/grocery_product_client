"use client"
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

const ProductItem = ({ product }) => {
const { addToCart } = useCart();
const [selectedProduct, setSelectedProduct] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (product) => {
  setSelectedProduct(product);
  setIsModalOpen(true);
};
const closeModal = () => {
  setSelectedProduct(null);
  setIsModalOpen(false);
  console.log(isModalOpen)
};

// const handleClick = () => {
//     addToCart(product);
//     console.log(product);
// }
  return (
    <div className="mx-auto bg-gray-200 p-3 rounded-lg">
        <img style={{width:'250px', height:'200px '}} className="mb-2" src={product.photo_url} alt="" />
      <h1 className="mb-1 text-gray-800 font-bold">{product.name}</h1>
      {/* <p className="mb-1">${product.price}</p> */}
      {/* <p className="mb-2">{product.description}</p> */}
      <button onClick={() => openModal(product)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      
      Details
    </button>
    <ProductModal
        isOpen={isModalOpen}
        product={product}
        onRequestClose={closeModal}
      />
      {/* You can add more details or actions for each product here */}
    </div>
  );
};

export default ProductItem;
