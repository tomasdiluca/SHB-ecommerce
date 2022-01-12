import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CartWidget from "../CarWidget/CartWidget";
import { Link } from "react-router-dom";
// import Input from "../Input/Input";
import ListGroup from "react-bootstrap/ListGroup";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <div>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/dbt8209co/image/upload/v1639698978/Second%20Hand%20Brand/SHB-logo_l73qmj.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            className="container-fluid d-flex justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <Link
                  to="/categoria/hogar-muebles-jardin"
                  className="text-decoration-none"
                >
                  <ListGroup.Item>Hogar, Muebles y Jardín</ListGroup.Item>
                </Link>

                <Link
                  to="/categoria/electrodomesticos"
                  className="text-decoration-none"
                >
                  <ListGroup.Item> Electrodomésticos </ListGroup.Item>
                </Link>

                <Link
                  to="/categoria/tecnologia"
                  className="text-decoration-none"
                >
                  <ListGroup.Item> Tecnología </ListGroup.Item>
                </Link>

                <Link to="/categoria/deportes" className="text-decoration-none">
                  <ListGroup.Item> Deportes </ListGroup.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* <Input /> */}
          <CartWidget />
          <div className="ms-4">
            <Button variant="outline-secondary" id="button-login">
              Login
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
