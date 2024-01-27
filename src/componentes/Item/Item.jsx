import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, precio, img, idCat }) => {
  return (
    <div className="cardProducto">
      <img src={img} alt={nombre} />
      <h3> {nombre} </h3>
      <p> ${precio} </p>
      {idCat !== "3" && <p>Available: {stock} </p>}

      <Link className="btn" to={`/item/${id}`}>
        {" "}
        View Details{" "}
      </Link>
      <Link to="/cart"></Link>
    </div>
  );
};

export default Item;
