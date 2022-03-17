import React from 'react';
import {BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import { dbConfig } from '../firebase';

export const Reservas = () => {

    const [nombre, setNombre ]= useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [comentario, setComentario] = useState('');

    const submit = (e) => {
       e.preventDefault();
       guardarDatos();
    }


    const guardarDatos = async () => {
            const reservaDatos = {
                nombre, 
                email,
                numero,
                comentario,
            };

            try {
                const DB = collection (dbConfig, 'reservas');
                const item = await  addDoc(DB, reservaDatos);
            } catch(e) {
                console.log('hubo un error');
                console.log(e);
            }
        };
    
        const handleFormNombre = (texto) => {
            setNombre(texto);
        };

        const handleFormEmail = (texto) => {
            setEmail(texto);
        };

        const handleFormNumero = (texto) => {
            setNumero(texto);
        };

        const handleFormComentario = (texto) => {
            setComentario(texto);
        };


    return (
      <div className="container-fluid mx-auto border border-info rounded m-4 p-4" style={{width: '500px'}}>
      <div className="">
        
        <div className="m-4">
          <h3> Formulario de contacto </h3>
          <form onSubmit={submit}>
          <label className="form-label"> Nombre</label>

          <input type= 'text' className= 'form-control'
          onChange={(e)=>handleFormNombre(e.target.value)}
          value= {nombre} />
          
          <label className='form-label'> Email </label>

          <input type= 'text' className="form-control"
          onChange={(e)=>handleFormEmail(e.target.value)}
          value={email}/>

          <label className='form-label'> Número </label>

          <input type= 'text' className="form-control"
          onChange={(e)=>handleFormNumero(e.target.value)}
          value={numero}/>

          <label className='form-label'> Comentario </label>

          <input type= 'text' className="form-control"
          onChange={(e)=>handleFormComentario(e.target.value)}
          value={comentario}/>

          <div></div>
          <hr />

          <button className="btn btn-dark"> Guardar </button>
          </form>

        </div>
      </div>
    </div>
    );
};
