import React from 'react';
import './DogCard.css'
import { NavLink } from "react-router-dom";


export default function DogCard({ id, name, img}){

return(
<div className='carta'>
        <div className='ciculo'></div>
        <img className='imgCarta' src={img} alt="imagen de raza"/>
        
    <NavLink className="linkDetalle" to={`/detail/${id}`}>
    {name}   
    </NavLink>	
    <div className='ciculoRelleno'></div>  
</div>
)
}