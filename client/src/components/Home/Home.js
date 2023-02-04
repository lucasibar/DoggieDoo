import './Home.css';
import React from 'react';
import Dogs from './Dogs/Dogs';
import Nav from './Nav/Nav'
        
function Home() {
return(
    <div className='contenedorHome'>
        <Nav/>
        <Dogs />
    </div>
)
        }

        export default Home;
        