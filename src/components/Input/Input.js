import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

// Para utilizarlo a posteriori cuando este configurado

const Input = () => {
  function sinVocales(event) {
    if (
      event.key === "a" ||
      event.key === "e" ||
      event.key === "i" ||
      event.key === "o" ||
      event.key === "u"
    ) {
      event.preventDefault();
    }
  }

  return (
    <div className=" container-fluid">
      <InputGroup>
        <FormControl
          placeholder="Buscar..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyDown={sinVocales}
        />

        <Button variant="outline-secondary" id="button-search">
          Buscar
        </Button>
      </InputGroup>
    </div>
  );
};

export default Input;
