import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Context/CartContext";
import CartCheckout from "./components/CartCheckout/CartCheckout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <center>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:idCategory"
              element={<ItemListContainer />}
            />

            <Route
              exact
              path="/detalle/:idDetail"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart/" element={<Cart />} />
            <Route exact path="/cart/checkout/" element={<CartCheckout />} />
          </Routes>
        </center>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
