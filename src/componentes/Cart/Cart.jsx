import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your cart is empty.</h2>
        <Link to="/" className="cart-button">
          Back To Store
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <div className="cart-summary">
        <h3>Total: $ {total}</h3>
        <h3>Total Items: {cantidadTotal}</h3>
      </div>
      <div className="cart-actions">
        <button onClick={() => vaciarCarrito()} className="cart-buttonvaciar">
          Empty Cart
        </button>
        <Link to="/checkout" className="cart-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
