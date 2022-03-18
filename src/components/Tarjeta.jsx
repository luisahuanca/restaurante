import React from 'react';

export const Tarjeta = ({src,title1}) => {
    return (
        <div className="card card1 mb-3">
        <img src={src} className="card-img-top img-fluid img_tamaño" alt=""  />
        <div className="card-body ">
          <h5 className="card-title ">{title1}</h5>
        </div>
        </div>
    )
};

