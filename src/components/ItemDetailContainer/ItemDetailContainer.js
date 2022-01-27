import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { idDetail } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "products", idDetail);

    getDoc(queryDb)
      .then((result) => setItem({ id: result.id, ...result.data() }))
      .catch((error) => alert("Se ha producido un error", error))
      .finally(() => setLoading(false));
  }, [idDetail]);

  return <>{loading ? <Loading /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
