import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Loading from "../Loading/Loading";

const CartConfirmation = ({ dataFormName, orderId, confirmation }) => {
  return (
    <>
      {confirmation ? (
        <Loading />
      ) : (
        <Row>
          <Col>
            <Alert variant="success">
              <Alert.Heading>¡Hola {dataFormName}!</Alert.Heading>
              <p>¡Su numero de orden se ha generado con exito!</p>
              <p className="fs-4">Numero de Orden: {orderId}</p>
            </Alert>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CartConfirmation;
