"use client"
import { useCart } from '@context/CartContext';
import "../../styles/cart.css";

function Cart() {
  const { cart } = useCart();
  console.log(cart)

  return (
    <div className="cart mx-auto">
      <h2>Your Cart: {cart.length}</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button className="bg-yellow-500 px-2 text-white font-bold rounded mx-1 hover:bg-yellow-700">-</button>
              <span className="cart-item-quantity-text">{item.quantity}</span>
              <button className="bg-yellow-500 px-2 text-white font-bold rounded mx-1 hover:bg-yellow-700">+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total:</p>
        <p className="cart-total-amount">
          ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold mt-2 py-1 px-3 rounded ">Checkout</button>
    </div>
  );
}

export default Cart;
