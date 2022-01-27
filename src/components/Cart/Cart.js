import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CartControls from "../CartControls/CartControls";
import CartDetail from "../CartDetail/CartDetail";

const Cart = () => {
  const { cartList } = useContext(CartContext);

  const [noItems, setNoItems] = useState(true);

  useEffect(() => {
    cartList.length !== 0 ? setNoItems(true) : setNoItems(false);
  }, [cartList.length]);

  return (
    <>
      <Container>
        {noItems ? (
          <Row>
            <Col sm={9}>
              <CartDetail />
            </Col>
            <Col sm={3}>
              <CartControls />
            </Col>
          </Row>
        ) : (
          <div className="mt-5">
            <p className="fs-1">El carrito está vacío</p>
            <Link to="/">
              <Button className="btn btn-primary  mt-2">Volver a inicio</Button>
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
