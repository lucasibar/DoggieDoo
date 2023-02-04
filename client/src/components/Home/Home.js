//import './Home.css';
import React from 'react';
import Dogs from './Dogs/Dogs';
import Nav from './Nav/Nav'
import imgHome from '../../imagenes/portada4.jpg'
        
        function Home() {
return(
    <>
        <Nav/>
        <img   className='imagenHome' src={imgHome} alt='error imagen home' />
        <Dogs />
    </>
)
        }

        export default Home;
        