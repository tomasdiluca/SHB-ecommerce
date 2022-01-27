import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Container from "react-bootstrap/Container";
import CartConfirmation from "../CartConfirmation/CartConfirmation";
import CartCheckoutDetail from "../CartCheckoutDetail/CartCheckoutDetail";
import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import CartCheckoutForm from "../CartCheckoutForm/CartCheckoutForm";

const CartCheckout = () => {
  const { totalCart, cartList } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    repeatEmail: "",
  });

  const [orderConfirmation, setOrderConfirmation] = useState(false);

  const [confirmation, setConfirmation] = useState(true);

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

    let validEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (order.items.length === 0) {
      alert("Por favor agregue productos al cart para continuar");
    } else if (
      dataForm.name === "" ||
      dataForm.phone === "" ||
      dataForm.email === "" ||
      dataForm.repeatEmail === ""
    ) {
      alert("Por favor complete todos los campos");
    } else if (!validEmail.test(dataForm.email)) {
      alert("Ingrese un formato de email correcto");
    } else if (dataForm.repeatEmail !== dataForm.email) {
      alert("Los correos electronicos no coinciden");
    } else {
      const db = getFirestore();
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then((result) => setOrderId(result.id))
        .catch((error) => alert("Se ha producido un error", error))
        .finally(() => setConfirmation(false));

      setOrderConfirmation(true);
    }
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
        <CartCheckoutDetail />
        {orderConfirmation ? (
          <CartConfirmation
            dataFormName={dataForm.name}
            orderId={orderId}
            confirmation={confirmation}
          />
        ) : (
          <CartCheckoutForm
            generarOrden={generarOrden}
            handleChange={handleChange}
            dataForm={dataForm}
          />
        )}
      </Container>
    </>
  );
};

export default CartCheckout;
