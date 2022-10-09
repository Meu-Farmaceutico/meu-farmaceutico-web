import "../styles/HomeZero.css";
import React from 'react';
import arrowback from '../assets/imgs/arrow-left.svg'; // Tell webpack this JS file uses this image
import cart from '../assets/imgs/cart.svg'; // Tell webpack this JS file uses this image
import avatar from '../assets/imgs/avatar-img.svg'; // Tell webpack this JS file uses this image


const HomeZero = () => {
  return (
    <div>
        <div className="wrapper">
            <h3 className="titleH3">Adicionar medicamento</h3>
            <a href="/OpcaoMais"><img src={arrowback} alt="voltar" className="back-icon"/></a> 
            <img src={cart} alt="cart icon" className="store-icon"/>  
        </div>
        <main className="main">
            <div className="historico-vazio">
                <img src={avatar} alt="avatar farmaceutico" className="avatar-img"/> 
                <h3 className="historico-vazio-heading bold">Ah não!</h3> 
                <h4 className="historico-vazio__heading">Lista de Tratamentos vazia</h4> 
                <p className="historico-vazio__para">Adicione um lembrete sobre medicamentos</p> 
                <div className="call-to-action">
                    <a href="/AddMedicamento" className="historico-vazio-cta lembrete" >Adicionar Medicamentos</a> 
                    <button className="historico-vazio-cta oferta">Ir para ofertas</button> 
                </div>
            </div> 
        </main>
   </div>

  );
};

export default HomeZero;