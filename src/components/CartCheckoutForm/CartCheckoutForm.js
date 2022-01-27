import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CartCheckoutForm = ({ generarOrden, dataForm, handleChange }) => {
  return (
    <>
      <Row>
        <Form
          onChange={handleChange}
          className="border-top shadow p-3 mt-3 bg-body rounded"
        >
          <Row>
            <Col>
              <p className="text-start fs-5 fw-bold">
                Ingrese sus datos y genere la orden
              </p>
            </Col>
          </Row>

          <Row className="text-start">
            <Col xs={12} lg={6} className="mb-3">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre y Apellido.."
                value={dataForm.name}
              />
            </Col>
            <Col xs={12} lg={6} className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Teléfono.."
                value={dataForm.phone}
              />
            </Col>
            <Col xs={12} lg={6} className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                value={dataForm.email}
              />
            </Col>
            <Col xs={12} lg={6} className="mb-3">
              <Form.Label>Repetir-Email</Form.Label>
              <Form.Control
                type="email"
                name="repeatEmail"
                placeholder="name@example.com"
                value={dataForm.repeatEmail}
              />
            </Col>
            <Col className="text-end mb-3">
              <Button variant="success" type="submit" onClick={generarOrden}>
                Generar orden
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
};

export default CartCheckoutForm;
