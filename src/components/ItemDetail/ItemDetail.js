import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import CarouselImages from "../CarouselImages/CarouselImages";

const ItemDetail = ({ item }) => {
  const { id, image2, name, price, description, stock } = item;

  const initial = 1;

  const { addToCart } = useContext(CartContext);

  const onAdd = (cant) => {
    // const message = `Agregaste ${cantidad} producto`;
    // cantidad === 1 ? alert(message) : alert(`${message}s`);
    setGoCart(false);
    addToCart({ ...item, quantity: cant });
  };

  const [goCart, setGoCart] = useState(true);

  return (
    <div key={id} className="mt-5 ">
      <div className="container p-3">
        <div className="row">
          <div className="col-8">
            <CarouselImages image={image2} />

            <p className=" p-2 bg bg-light">{description}</p>
          </div>
          <div className="border col-4">
            <div className="p-1 my-2">
              <h4 className="text-uppercase">{name}</h4>
              <p>Precio: USD {price}</p>
              <p>Stock: {stock}</p>
            </div>

            {goCart ? (
              <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart/">
                <Button variant="outline-success" className="container-fluid">
                  Ir al Carrito
                </Button>
              </Link>
            )}

            <Link to="/">
              <Button
                variant="outline-primary"
                className="container-fluid mt-2"
              >
                Seguir Comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
