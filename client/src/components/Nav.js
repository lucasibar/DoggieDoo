import React, {useEffect, useState}from 'react';
import { NavLink } from "react-router-dom";
import dogLogo from '../imagenes/dog.png';
import { useDispatch } from 'react-redux';
import {pesoMayMen, nombreAZ, getAllDogs, dogsApi, dogsBDD, search, clearFiltros} from '../redux/actions'
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

    <img onClick={()=>dispatch(clearFiltros())} className='imagenHomeBarra' src={dogLogo} alt="foto entrada"/>
    <button className='buttonFiltros' onClick={()=>dispatch(pesoMayMen())}>{ordenadoMayMen||"MENOR-MAYOR"}</button>
    <button className='buttonFiltros' onClick={()=>dispatch(nombreAZ())}>{ordenadoAZ}</button>
    <button className='buttonFiltros' onClick={()=>dispatch(dogsApi())}>Dogs de la api</button>
    <button className='buttonFiltros' onClick={()=>dispatch(dogsBDD())}>Dogs de la base de datos</button>
    
    <input className= 'inputSearch' type="text" value={busqueda} placeholder="SEARCH" onChange={handleOnChange} /> 
    <button className='botonSearch' onClick={botonBusqueda}></button> 
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