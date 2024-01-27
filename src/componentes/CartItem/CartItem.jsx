import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";
const CartItem = ({ item, cantidad, img }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="itemCart">
      <div className="item-info">
        <h4 className="item-name">{item.nombre}</h4>
        <p className="item-quantity">Quantity: {cantidad}</p>
        <p className="item-price">${item.precio}</p>
      </div>
      <button
        onClick={() => eliminarProducto(item.id)}
        className="remove-button"
      >
        Remove Item
      </button>
      <hr className="item-divider" />
    </div>
  );
};

export default CartItem;
