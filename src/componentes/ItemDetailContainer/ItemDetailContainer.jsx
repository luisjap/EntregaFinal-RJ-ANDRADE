import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../service/config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [producto, setItem] = useState(null);
  const { id } = useParams();

useEffect(() => {
  const nuevoDoc = doc(db, "item", id);
  getDoc(nuevoDoc)
  .then((resp) => {
    setItem(
      {...resp.data(), id: resp.id}
    )
})
.catch(error => console.log("Error Inesperado", error))


}, [id])

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer