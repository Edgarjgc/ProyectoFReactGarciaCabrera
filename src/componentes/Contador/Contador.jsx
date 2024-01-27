import { useState } from "react";
import "./Contador.css";

const Contador = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementCounter = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementCounter = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador-container">
      <div className="quantity-selector">
        <button onClick={decrementCounter} className="btnr">
          -
        </button>
        <p className="quantity-display">{contador}</p>
        <button onClick={incrementCounter} className="btns">
          +
        </button>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => funcionAgregar(contador)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Contador;
