import React, {useEffect, useState}from 'react';
import { NavLink } from "react-router-dom";
import huella from '../../../imagenes/huella.jpg';
import { useDispatch } from 'react-redux';
import {pesoMayMen, nombreAZ, getAllDogs, dogsApi, dogsBDD, search, clearFiltros} from '../../../redux/actions'
import './Nav.css'
import { connect } from 'react-redux';

function Nav ({ordenadoAZ, ordenadoMayMen}){    
    let dispatch = useDispatch() 
    useEffect(()=>{
		dispatch(getAllDogs())
	},[dispatch])
    
    const [busqueda, setBusqueda] = useState('')
    function handleOnChange(e){
       setBusqueda(e.target.value)
    }
    function botonBusqueda(){
        dispatch(search(busqueda))
        setBusqueda('')
    }
    

return (
<div  className='nav'>
    <div className='div1'>
        <button className='buttonFiltros' onClick={()=>dispatch(clearFiltros())}>Home</button>
        <button className='buttonFiltros' onClick={()=>dispatch(pesoMayMen())}>{ordenadoMayMen||"MENOR-MAYOR"}</button>
        <button className='buttonFiltros' onClick={()=>dispatch(nombreAZ())}>{ordenadoAZ}</button>
    </div>
    <img className='huella' src={huella} alt='no se cargo la huella'/>
    <div className='div2'>
        <button className='buttonFiltros' onClick={()=>dispatch(dogsApi())}>DogsApi</button>
        <button className='buttonFiltros' onClick={()=>dispatch(dogsBDD())}>DogsBdd</button>
        <input className= 'inputSearch' type="text" value={busqueda} placeholder="Search" onChange={handleOnChange} /> 
        <button className='botonSearch' onClick={botonBusqueda}></button>
    </div>

    <NavLink className='create' to='/create'>+</NavLink>
</div>
)
}
const mapStateToProps=(state)=>{
    return{
        ordenadoAZ: state.ordenadoAZ,
        ordenadoMayMen:state.ordenadoMayMen
    }
}
export default connect(mapStateToProps, null)(Nav);