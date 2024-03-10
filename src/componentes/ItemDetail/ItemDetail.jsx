import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

import { CarritoContext } from '../../context/CarritoContext';


import { useContext } from 'react';

const ItemDetail = ({nombre, stock, precio,description, img }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const { agregarAlCarrito } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {nombre, precio };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <p>Precio: {precio} </p>
      <p>{stock}</p>
      <p>{description} </p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link className='btn2' to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail