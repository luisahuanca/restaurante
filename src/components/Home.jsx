import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import '../style.css';

export const Home = () => {
    
    return (
    <div className='container_nosotros p-4'>
        <div className="card mb-3 bg-dark text-light border-0 rounded" >
        <div className="row g-0">
          <div className="col-md-6 rounded">
            <img src='https://media.istockphoto.com/photos/young-woman-eating-ramen-noodle-in-old-japanese-restaurant-picture-id606230886?k=20&m=606230886&s=612x612&w=0&h=YG22xBYFB5SW7qCeqhO7EzfoUxp7_gJQ5QHXxCCxNNw=' className="img1" alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body font-weight-light p-5">
              <h2 className="card-title">¿Quiénes somos?</h2>
              <p className="card-text">Fideos Spam desde hace 10 años sirve los mejores fideos estilo coreano y japonés de Lima. Aquellos que te reconfortan después de un día cansado,
               te refrescan en un día de verano o te calientan en las noches gélida de invierno. Ubicados en el centro de la capital atendemos a familias, parejas, amigos, colegas los 7 días de la semana.
               Nuestras recetas se han ido perfeccionando cada día más para que el sabor sea irremplazable y único. Tradición y legado es lo que nos representa así que
               no te resistas a la tentación de disfrutar un rico plato de fideos de tu preferencia y visitanos! </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="card mx-auto p-4" style={{width: '500px'}}>
        <img className="card-img-top mx-auto" style={{width: '200px'}} src="https://www.popuprestaurants.com/wp-content/uploads/2020/11/1806_IMG-0688.jpg" alt="Card image cap" />
        <div className="card-body"> 
          <h5 className="card-title">Ubicación y contacto</h5>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Calle Las Magnolias 425, San Isidro</li>
          <li className="list-group-item">555 - 2120 / 996 556 241</li>
          <li className="list-group-item">noodles.restaurant@gmail.com</li>
        </ul>
    
      </div>
    </div>

      
    )
};