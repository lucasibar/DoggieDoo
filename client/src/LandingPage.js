import React from 'react';
import imagenPortada from './imagenes/fotoPortada.jpg';
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage(){
    return (
    <>
    <div>
         <div className='ciculoBlanco'></div>
        <img className='imagenPortada' src={imagenPortada} alt="foto portada"/>
    </div>
       




    <div>
        <div className='ciculoMayor'>
            <div className='circuloInterno'></div>
        </div>
        <div className='contenedorTexto'>
            <h2 className='subtitulo'>Every one needs a friend</h2>
            <h1 className='titulo'>- DoggieDoo</h1>
            <p className='parrrafoLanding'>Find joy, company and tenderness within reach of a click.
            Dogs looking for a new home are posted on this page. Welcome!!!</p>
        </div>

        
    </div>
       
        <Link to='/inicio'>
            <button>Start</button>
        </Link>



    </>
        
    )
}
