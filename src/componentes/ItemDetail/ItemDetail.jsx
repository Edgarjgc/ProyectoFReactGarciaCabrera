import { useState } from "react";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

import { CarritoContext } from "../../context/CarritoContext";

import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, precio, img, description }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <div className="containerLeft">
        <img src={img} alt={nombre} />{" "}
      </div>

      <div className="containerRight">
        <h2> {nombre} </h2>
        <span className="descriptionTitle">Description:</span>
        <p className="parrafod">{description} </p>
        <p className="price">{precio} </p>
        {agregarCantidad > 0 ? (
          <Link to="/cart" className="goToCartLink">
            Go To Cart
          </Link>
        ) : (
          <Contador
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
