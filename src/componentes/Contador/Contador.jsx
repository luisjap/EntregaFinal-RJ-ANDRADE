import { useState } from "react";
import './Contador.css'

const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    

    const sumarContador = () => {
        if(contador < stock ){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <>
        <p> {contador} </p>
        <button className="btn2" onClick={restarContador}> - </button>
        <button className="btn2" onClick={sumarContador}> + </button>

        <button className="btn2" onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default Contador