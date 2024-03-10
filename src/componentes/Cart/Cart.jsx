import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return (
            <>
                <h3>Aun no hay productos en el carrito, te invitamos a revisar nuestras promociones </h3>
                <Link className="btn2" to="/"> Ver Productos </Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <button className="btn3" onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
        <Link className="btn2" to="/checkout"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart