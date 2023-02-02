import React, { useState, useEffect }from 'react';
import { connect } from 'react-redux';
import DogCard from '../DogCard';
import { useDispatch } from 'react-redux';
import {setPaginaActual, disminuirBoton, aumentarBoton} from '../../redux/actions'
import './Dogs.css';



//ESTE COMPONENTE SOLO SE ENCARGA DE RENDERIZAR LOS ESTADOS TENIENDO EN CUENTA EL ESTADO REDUX DE "DOGS"(pordefault) O "DOGSRENDER"(si es que tiene algo), SEGUN EL ESTADO REDUX DE LAS PAGINAS
export function Dogs({ dogsRender, dogs, paginaActual}) { 
	
	//QUE RENDERIZAR
	const [renderizado, setRenderizado] = useState([])
	let dispatch = useDispatch()
	useEffect(() => {
	  setRenderizado(dogsRender.length ? [...dogsRender] : [...dogs])
	}, [dogs, dogsRender])	

	//PAGINADO
	function handlePagina(e){dispatch(setPaginaActual(e.target.innerText))}
	const paginas = renderizado.length ? Math.ceil(renderizado.length / 8) : null
	const botones = []

	//BOTONES
	for(let i=0; i<paginas; i++){botones.push(
	<button key={i} id={i} onClick={handlePagina}>{i}</button>)}

	return (
	<div className="dogs">
		<div className='paginaActual'>{paginaActual}</div>
		<div className="botonesPaginas">
			<button onClick={()=>dispatch(disminuirBoton())} disabled={paginaActual == 0? true : false}>{"<"}</button>
			{botones? botones: null}
			<button onClick={()=>dispatch(aumentarBoton())} disabled={paginaActual == Math.ceil(renderizado.length / 8)-1? true : false}>{">"}</button>
		</div>

		<div className="contenedorDogs">
			{renderizado.length? renderizado.slice(paginaActual*8,paginaActual*8 + 8).map(d => 
			<DogCard key={d.id} 
			id={d.id} 
			name={d.name} 
			img={d.img} 
			temperament={d.temperament} 
			/>): <img src='https://www.petdepotstorecr.com/images/pawsDog.gif' alt='LOADDING'/>}
		</div>
	</div>	
)}

export const mapStateToProps = (state) => {
return {
	dogs: state.dogs,
	dogsRender: state.dogsRender,
	paginaActual: state.paginaActual,
}}
export default connect(mapStateToProps, null)(Dogs);


