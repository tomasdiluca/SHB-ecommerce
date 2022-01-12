import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";

const CartCheckout = () => {
  const { totalCart, cartList } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderConfirmation, setOrderConfirmation] = useState(false);

  const generarOrden = (event) => {
    event.preventDefault();

    let order = {};

    order.buyer = {
      dataForm,
    };

    order.date = Timestamp.fromDate(new Date());

    order.total = totalCart;

    order.items = cartList.map((item) => {
      const id = item.id;
      const title = item.name;
      const price = item.price;
      const quantity = item.quantity;
      const subtotal = item.price * item.quantity;

      return { id, title, price, quantity, subtotal };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((result) => setOrderId(result.id))
      .catch((error) => alert("Se ha producido un error", error));

    setOrderConfirmation(true);
  };

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Container>
        {cartList.map((itCart) => (
          <div
            key={itCart.id}
            className="border-top shadow p-3 mt-3 bg-body rounded"
          >
            <Row>
              <Col>
                <p> {itCart.name} </p>
              </Col>
              <Col>
                <p>Cantidad: {itCart.quantity}</p>
              </Col>
              <Col>
                <p> Precio Unitario: USD {itCart.price}</p>
              </Col>
              <Col>
                <p className="text-end">
                  Subtotal: USD {itCart.quantity * itCart.price}
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

        {orderConfirmation ? (
          <Row>
            <Col>
              <Alert variant="success">
                <Alert.Heading>¡Hola {dataForm.name}!</Alert.Heading>
                <p>¡Su numero de orden se ha generado con exito!</p>
                <p className="fs-4">Numero de Orden: {orderId}</p>
              </Alert>
            </Col>
          </Row>
        ) : (
          <Row>
            <Form
              onChange={handleChange}
              className="border-top shadow p-3 mt-3 bg-body rounded"
            >
              <Row>
                <Col>
                  <p className="text-start fs-5">
                    Ingrese sus datos y genere la orden
                  </p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nombre y Apellido.."
                    value={dataForm.name}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Teléfono.."
                    value={dataForm.phone}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email.."
                    value={dataForm.email}
                  />
                </Col>
                <Col>
                  <Button
                    variant="success"
                    type="submit"
                    onClick={generarOrden}
                  >
                    Generar orden
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        )}
      </Container>
    </>
  );
};

export default CartCheckout;
