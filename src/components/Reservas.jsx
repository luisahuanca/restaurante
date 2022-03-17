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
      <div className="container">
      <div className="row">
        
        <div className="col-6">
          <h1> Reservas </h1>
          <form onSubmit={submit}>
          <label className="form-label"> Nombre</label>

          <input type= 'text' className= 'form-control'
          onChange={(e)=>handleFormNombre(e.target.value)}
          value= {nombre} />
          
          <label className='form-label'> Nota </label>

          <input type= 'text' className="form-control"
          onChange={(e)=>handleFormEmail(e.target.value)}
          value={email}/>
          <button className="btn btn-dark"> </button>
          </form>

        </div>
      </div>
    </div>
    );
};

