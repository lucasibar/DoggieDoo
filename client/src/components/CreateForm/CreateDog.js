import React, { useState, useEffect }from 'react';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import axios from "axios"
import validate, {initialState} from './validate.js'
import './CreateDog.css'



function CreateDog (props){
    let dispatch = useDispatch()
    useEffect(()=>{
        axios.get("http://localhost:3001/temperaments")
        .then(data=> setTemperamentos([...data.data]))
    },[dispatch])


    const [temperamentos, setTemperamentos] = useState([])
    const [datosForm, setDatosForm] = useState(initialState)
    const [error, setError] = useState({})
    const [newTemperamentos, setNewTemperamentos] = useState('')
    const [selectedOption, setSelectedOption] = useState([]);
    
    const handleOnChange = (e)=>{
        setDatosForm(prevState=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleOnBlur = (e)=>{
    let objError = validate(datosForm)
    setError(objError)
    }

    
    const handleTempsOnChange= async(e)=>{
        setNewTemperamentos(e.target.value)
    }

    const botonNewTemp= (e)=>{
        e.preventDefault();
        if(datosForm.temperamentos.includes(newTemperamentos)){
            alert('Esta opcion ya fue seleccionada')
        }else{
        setDatosForm(prevState=>({
            ...prevState,
            temperamentos: [...datosForm.temperamentos, newTemperamentos]
        }))
        setNewTemperamentos('')
        }

    }


    

    function handleTempSeleccion(e) {
      setSelectedOption(Array.from(e.target.selectedOptions, option => option.value));

    }
  
    function AddOption(e) {
        if(datosForm.temperamentos.includes(...selectedOption)){
            alert('Esta opcion ya fue seleccionada')
        }else{
                   setDatosForm(prevState=>({
        ...prevState,
        temperamentos: [...datosForm.temperamentos, ...selectedOption]
        })) 
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
       if(!datosForm.name || !datosForm.heightMAX || !datosForm.heightMIN || !datosForm.weightMAX || !datosForm.weightMIN || !datosForm.life_span || !datosForm.temperamentos) {
        alert("Falta completar datos")
       }else{
            await axios.post("http://localhost:3001/dogs", datosForm).then(data=> alert(data.data))
            setDatosForm(initialState)
       }
    }
    function borrarTemp(e){
        setDatosForm(prevState=>({
        ...prevState,
        temperamentos: datosForm.temperamentos.filter(el=> el !== e.target.value)
        }))
    }

    return (
<div className='form'>
    
    <form onSubmit={handleSubmit}>
    <div className='contenedorInput'>
        <label>Raza</label>
        <input 
        type="text" 
        placeholder= "Nombre de la raza"
        value={datosForm.name} 
        name='name' 
        onChange={handleOnChange}
        onBlur={handleOnBlur}/> 
        <p style={{visibility: error.name? "visible" : "hidden"}} className="danger">{error.name}</p>
    </div>
<hr/>
    <div className='contenedorInput'>
        <label>Altura</label>
        <input 
        type="text" 
        placeholder="Altura maxima"
        value={datosForm.heightMAX} 
        name='heightMAX' 
        onChange={handleOnChange}
        onBlur={handleOnBlur} /> 
        
        <input 
        type="text"  
        placeholder="Altura minima"
        value={datosForm.heightMIN} 
        name='heightMIN' 
        onChange={handleOnChange}
        onBlur={handleOnBlur} /> 
        
        <p style={{visibility: error.heightMAX? "visible" : "hidden"}} className="danger" >{error.heightMAX}</p>
        <p style={{visibility: error.heightMIN? "visible" : "hidden"}} className="danger" >{error.heightMIN}</p>

    </div>
<hr/>
    <div className='contenedorInput'>
        <label>Peso</label>
        <input 
        type="text" 
        placeholder="Peso maxima"
        value={datosForm.weightMAX} 
        name='weightMAX' 
        onChange={handleOnChange}
        onBlur={handleOnBlur} /> 

        <input 
        type="text"  
        placeholder="Peso minima"
        value={datosForm.weightMIN} 
        name='weightMIN' 
        onChange={handleOnChange}
        onBlur={handleOnBlur} /> 
        
        <p style={{visibility: error.weightMAX? "visible" : "hidden"}} className="danger" >{error.weightMAX}</p>     
        <p style={{visibility: error.weightMIN? "visible" : "hidden"}} className="danger" >{error.weightMIN}</p>     
    </div>
<hr/>
    <div className='contenedorInput'>
        <label>Estimado de vida</label>
        <input 
        type="text" 
        placeholder="Estimado de vida maxima"
        value={datosForm.life_span} 
        name='life_span' 
        onChange={handleOnChange}
        onBlur={handleOnBlur} /> 

        <p style={{visibility: error.life_span? "visible" : "hidden"}} className="danger">{error.life_spanMIN}</p>      
    </div>
<hr/>
    <div className='contenedorInput'>
        <label>Crear temperamento</label>
        <input 
            type="text" 
            placeholder="Nuevo temperamento"
            value={newTemperamentos} 
            name='temperamentos' 
            onChange={handleTempsOnChange}
            /> 
        <button id='botonTemp' onClick={botonNewTemp}>+</button>
        <hr/>
    </div>
    <div className='contenedorInput'>
        <label>Temperamentos</label>
        <select onChange={handleTempSeleccion}>
        <option >Selecione opcion...</option>
            {temperamentos?.map(t=>(<option value={t} key={t}>{t}</option>))}
        </select>
        <input id='botonTemp' type="button" value="+" onClick={AddOption} />
    </div>
    
    <div className='contenedorTempsSelected'>
    {datosForm.temperamentos?.map(e=>
    <button className="tempSeleccionado" onClick={borrarTemp} value={e} key={e}>{e}</button>
     )}
    </div>
   
    
      <input className='botonSubmit' type="submit" value= "Create" disabled={Object.keys(error).length === 0? false : true}/>

    

    </form>

    
    <Link to="/inicio" className='homeBoton'>Home</Link>  
    
    
</div>
    


    );
};

export default CreateDog;