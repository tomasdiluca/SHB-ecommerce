import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CartDetail = () => {
  const { cartList, removeItem } = useContext(CartContext);

  const handlerRemoveItem = (item) => {
    removeItem(item);
  };

  return (
    <>
      {cartList.map((itCart) => (
        <div
          key={itCart.id}
          className="border-top shadow p-3 mt-3 bg-body rounded"
        >
          <Row>
            <Col lg={3} xs={9}>
              <div>
                <img src={itCart.image} alt="imagen producto cart" />
              </div>
            </Col>
            <Col lg={(3, { order: "last" })} xs={3} className="text-end mt-2">
              <Button
                variant="outline-secondary"
                onClick={() => handlerRemoveItem(itCart.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </Button>
            </Col>
            <Col lg={3} xs={8} className="text-start mt-2">
              <p className="fw-bold text-uppercase"> {itCart.name} </p>
              <p>Cantidad: {itCart.quantity}</p>
              <p> Precio Unitario: USD {itCart.price}</p>
            </Col>
            <Col lg={3} xs={4} className="fw-bold mt-2">
              <p>SUBTOTAL: USD {itCart.quantity * itCart.price}</p>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default CartDetail;
