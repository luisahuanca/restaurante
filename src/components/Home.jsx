import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import '../style.css';

export const Home = () => {
    
    return (
    <div className='container_nosotros'>
        <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-6">
            <img src='https://images.squarespace-cdn.com/content/v1/54b1b8f7e4b027b16099c4b2/1503248053880-WNCHTO04NAZ3QTW6ZE9N/4.jpg' className="img1" alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">¿Quiénes somos?</h2>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>

      
    )
};