import freecodlogo from "./images/logo-freecampcode.png";
import './App.css';
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/BotonClear.jsx";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    }        
  }

  return (
    <div className="App">
      <div className="freecode-logo-contenedor">
        <img
          src = {freecodlogo} 
          className = "freecode-logo"
          alt = "logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input = {input}/>
        <div className="fila">
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <BotonClear manejarClic={() => setInput('')}> Clear </BotonClear>
      </div>
    </div>
  );
}

export default App;
