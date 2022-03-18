import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';

export const Footer = () => {
    return (
       
        
        <div className="card text-center border-0">
           
        
        <div className="card-body">

          <p className="card-text">Todos nuestros platos están hecho con fideos 100% artesanales hechos en casa.
          </p>
          
        </div>
        <div className="card-footer text-light bg-dark p-4">
          Lima, Peru - 2022
        </div>
      </div>
      
    )
}
