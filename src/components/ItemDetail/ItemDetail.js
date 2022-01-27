import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import CarouselImages from "../CarouselImages/CarouselImages";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { id, image2, name, price, description, stock } = item;

  const initial = 1;

  const { addToCart } = useContext(CartContext);

  const onAdd = (cant) => {
    setGoCart(false);
    addToCart({ ...item, quantity: cant });
  };

  const [goCart, setGoCart] = useState(true);

  return (
    <div key={id} className="mt-5 ">
      <Container>
        <Row>
          <Col lg={8} xs={12}>
            <CarouselImages image={image2} />

            <p className=" p-2 bg bg-light">{description}</p>
          </Col>
          <Col lg={4} xs={12} className="border">
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
                className="container-fluid my-2"
              >
                Seguir Comprando
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
