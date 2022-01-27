import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = idCategory
      ? query(collection(db, "products"), where("category", "==", idCategory))
      : query(collection(db, "products"));

    getDocs(queryCollection)
      .then((result) =>
        setProducts(
          result.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        )
      )
      .catch((error) => alert("Se ha producido un error", error))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <Container>
      <Row>{loading ? <Loading /> : <ItemList products={products} />}</Row>
    </Container>
  );
};

export default ItemListContainer;
