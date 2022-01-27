import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CartWidget from "../CarWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Col lg={3} xs={6}>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/dbt8209co/image/upload/v1639698978/Second%20Hand%20Brand/SHB-logo_l73qmj.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="SBH logo"
                />
              </Navbar.Brand>
            </Link>
          </Col>
          <Col lg={(3, { order: "last" })}>
            <CartWidget />
          </Col>
          <Col lg={6} xs={12}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="container-fluid d-flex justify-content-around my-2 "
                navbarScroll
              >
                <Link to="/" className="text-decoration-none">
                  <Nav.Item className="me-5 ms-1 my-1 text-secondary container-fluid">
                    Inicio
                  </Nav.Item>
                </Link>

                <Link
                  to="/categoria/hogar-muebles-jardin"
                  className="text-decoration-none"
                >
                  <Nav.Item className="mx-1 my-1 text-secondary container-fluid">
                    Hogar, Muebles y Jardín
                  </Nav.Item>
                </Link>

                <Link
                  to="/categoria/electrodomesticos"
                  className="text-decoration-none"
                >
                  <Nav.Item className="mx-1 my-1 text-secondary container-fluid">
                    Electrodomésticos
                  </Nav.Item>
                </Link>

                <Link
                  to="/categoria/tecnologia"
                  className="text-decoration-none"
                >
                  <Nav.Item className="mx-1 my-1 text-secondary container-fluid">
                    Tecnología
                  </Nav.Item>
                </Link>

                <Link to="/categoria/deportes" className="text-decoration-none">
                  <Nav.Item className="mx-1 my-1 text-secondary container-fluid">
                    Deportes
                  </Nav.Item>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
