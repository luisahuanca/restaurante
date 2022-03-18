import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import { Tarjeta } from './Tarjeta';
export const Menu = () => {
    return (
        <div className='container1 mt-5'>
            <Tarjeta title1='Sopa de papa (Best Seller!)'  src="https://images.squarespace-cdn.com/content/v1/54b1b8f7e4b027b16099c4b2/1503248053880-WNCHTO04NAZ3QTW6ZE9N/4.jpg"/>
            <Tarjeta title1='Ramen de la casa' src="https://www.orientalmarket.es/wp-content/uploads/2016/07/ramen-1024x683.jpeg"/>
            <Tarjeta title1='Fideos negros sazonados' src="https://c.stocksy.com/a/H1wB00/z9/2844639.jpg"/>
            <Tarjeta title1='Fideos fríos para el calor' src="https://www.thespruceeats.com/thmb/hC_eumpsCqMMTSXoeiAPNXPpkXs=/1500x1000/filters:fill(auto,1)/korean-cold-noodles-2118781-hero-05-2dc2853780b74f04a3e65cb561a0f64f.jpg"/>
            <Tarjeta title1='Sopa de fideos con salchicha y queso' src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg"/>
            <Tarjeta title1='Sopa de Tofu vegana' src="https://www.animalpolitico.com/wp-content/uploads/2018/06/kimchi-jjigae.jpg"/>
        
        
      </div>

      
    )
}
