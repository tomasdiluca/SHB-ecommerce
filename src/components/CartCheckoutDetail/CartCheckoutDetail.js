import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CartCheckoutDetail = () => {
  const { totalCart, cartList } = useContext(CartContext);

  return (
    <>
      {cartList.map((itCart) => (
        <div
          key={itCart.id}
          className="border-top shadow p-3 mt-3 bg-body rounded"
        >
          <Row>
            <Col>
              <p className="fw-bold"> {itCart.name} </p>
            </Col>
            <Col>
              <p>
                {itCart.quantity} x USD {itCart.price}
              </p>
            </Col>
            <Col>
              <p className="fw-bold">
                SUBTOTAL USD {itCart.quantity * itCart.price}
              </p>
            </Col>
          </Row>
        </div>
      ))}
      <Row>
        <Col>
          <div className="mt-3 text-end fs-3">
            <p>Total: USD {totalCart}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CartCheckoutDetail;
