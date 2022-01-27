import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const Item = ({ product }) => {
  const { id, image, name, price, stock } = product;

  return (
    <Col sm={3}>
      <div key={id} className="my-3">
        <Card>
          <Card.Img variant="top" src={image} className="p-1" />
          <Card.Body>
            <Card.Title className="my-1 fs-6 text-uppercase">{name}</Card.Title>
            <p className="my-1 fs-6">Precio: USD {price}</p>
            <p className="my-1 fs-6">Stock disponible: {stock} </p>

            <Link to={`/detalle/${id}`}>
              <Button variant="secondary" className="container-fluid my-2">
                Descripción
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Item;
