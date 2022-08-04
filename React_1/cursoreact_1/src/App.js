import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  let variable='Jota';
  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen,setImagen] = useState('');

  const onChangeLinea1=function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2=function(evento){
    setLinea2(evento.target.value)
  }
  const onChangeImagen=function(evento){
    setImagen(evento.target.value)
  }
  const onClickExportar=function(evento){
    html2canvas(document.querySelector("#meme")).then(function(canvas) {
      let img= canvas.toDataURL("imagen/png");
       let link= document.createElement('a');
       link.download='meme.png';
       link.href=img; 
       link.click();
  });
  }

  return (
    <div className="App">
      //select picker de memes
      <select onChange={onChangeImagen}>
        <option value="jerry">Jerry</option>
        <option value="pikachu">Pikachu</option>
        <option value="ninho">Ninho</option>
      </select>
      <br/>
      //input text primer linea
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/>
      <br/>
      //input text seunfa linea
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/>
      <br/>
      //boton exportar
      <button onClick={onClickExportar}>Exportar</button>
      <br/>
      <div className='meme' id='meme'>
        <span className='span1'>{linea1} </span> <br/>
        <span className='span2'>{linea2} </span>
        <img src={"/img/"+ imagen+".jpg"}/>
      </div>


    </div>
  );
}

export default App;
