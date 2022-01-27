import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const handlerSuma = (valor) => {
    stock > contador
      ? setContador((prev) => prev + valor)
      : alert("NO HAY MAS ITEMS DISPONIBLES");
  };

  const handlerResta = (valor) => {
    initial < contador
      ? setContador((prev) => prev - valor)
      : alert("SELECCIONE AL MENOS UN ITEM");
  };

  return (
    <>
      <ButtonGroup
        aria-label="Basic example"
        className="container-fluid border border-dark rounded my-2 p-0 d-flex align-items-center"
      >
        <Button variant="light" onClick={() => handlerResta(1)}>
          -
        </Button>
        <span className="container-fluid align-middle">{contador}</span>
        <Button variant="light" onClick={() => handlerSuma(1)}>
          +
        </Button>
      </ButtonGroup>

      <Button
        variant="outline-secondary"
        className="container-fluid"
        onClick={() => onAdd(contador)}
      >
        Añadir al Carrito
      </Button>
    </>
  );
};

export default ItemCount;
