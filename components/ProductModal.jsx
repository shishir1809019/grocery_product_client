"use client";
import Modal from "react-modal";
import { useCart } from "../context/CartContext";
import "../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductModal = ({ isOpen, product, onRequestClose }) => {
  const { cart, addToCart, setChangeQuantity, changeQuantity } = useCart();

  const handleClick = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...product, quantity: 1 };
      addToCart(newItem);
    }
    setChangeQuantity(!changeQuantity); 
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      className={`modal ${isOpen ? "modal-open" : ""}`}
      overlayClassName={`overlay ${isOpen ? "overlay-open" : ""}`}
    >
      <div className="text-black text-lg text-right mr-3">
        <FontAwesomeIcon icon={faCartShopping} />
        {
          <span className="bg-red-500 text-white absolute top-0 right-15 rounded-full p-1 text-xs">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        }
      </div>
      <div className="mx-auto bg-gray-200 p-3 rounded-lg">
        <img
          style={{ width: "250px", height: "200px " }}
          className="mb-2"
          src={product.photo_url}
          alt=""
        />
        <h1 className="mb-1 text-gray-800 font-bold">{product.name}</h1>
        <p className="mb-1">${product.price}</p>
        <p className="mb-2">{product.description}</p>
        <div className="flex justify-between">
          <button
            onClick={handleClick}
            className="bg-gray-500 hover:bg-gray-700  text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>

          <button
            onClick={onRequestClose}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
