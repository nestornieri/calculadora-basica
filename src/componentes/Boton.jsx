import React from 'react';
import "../stylesheets/Boton.css";
const esOperacion = value => {
    return ( isNaN(value) && (value !== ".") && (value !== "="))
}

function Boton(props) {
  return (
    <div 
        className={`boton-contenedor ${esOperacion(props.children) ? "operador" : null}`}
        onClick = {() => {props.manejarClic(props.children)}}>
        {props.children}
    </div>
  )
}

export default Boton;