import React from 'react';
import './DogCard.css'
import { NavLink } from "react-router-dom";


export default function DogCard({ id, name, img, temperament}){

return(
<div className='carta'>
    <NavLink className="namelink" to={`/detail/${id}`}>
    <img className="imgCarta" src={img} alt="imagen de raza"/>
    <div className='texto'>{name}</div>   
    </NavLink>	


</div>
)
}