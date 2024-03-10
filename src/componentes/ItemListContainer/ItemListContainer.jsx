import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../service/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  const { idCategoria } = useParams()

  useEffect(() => {
    
    
    const misProductos = collection(db, "item");
    
    const q = idCategoria ? query(misProductos, where("categoria", "==", idCategoria)): misProductos;
     

    getDocs(q)
      .then((resp) => {
        
        setProductos(
          resp.docs.map((doc) => {
            return{...doc.data(),id: doc.id}
          })
        )    
      })
        
  }, [idCategoria])


  return (
    <div>
      <h4>Mis productos</h4>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer