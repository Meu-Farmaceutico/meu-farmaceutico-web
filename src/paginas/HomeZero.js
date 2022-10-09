import "../styles/HomeZero.css";
import React from 'react';
import arrowback from '../assets/imgs/arrow-back.svg'; // Tell webpack this JS file uses this image
import cart from '../assets/imgs/cart.svg'; // Tell webpack this JS file uses this image
import search from '../assets/imgs/search.svg'; // Tell webpack this JS file uses this image


const HomeZero = () => {
  return (
    <div>
        <div className="wrapper">
            <img src={arrowback} alt="voltar" className="back-icon"/> 
            <img src={cart} alt="cart icon" className="store-icon"/>  
        </div>
        <main className="main">
            <div className="historico-vazio">
                <img src={search} alt="avatar farmaceutico" className="historico-img"/> 
                <h3 className="historico-vazio-heading bold">Ah não!</h3> 
                <h4 className="historico-vazio__heading">Lista de Tratamentos vazia</h4> 
                <p className="historico-vazio__para">Adicione um lembrete sobre medicamentos</p> 
                <div className="call-to-action">
                    <button target="./sample.html" className="historico-vazio-cta lembrete" >Adicionar Medicamentos</button> 
                    <button className="historico-vazio-cta oferta">Ir para ofertas</button> 
                </div>
            </div> 
        </main>
   </div>

  );
};

export default HomeZero;