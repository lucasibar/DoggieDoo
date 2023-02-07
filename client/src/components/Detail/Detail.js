import React from 'react';
import { connect } from 'react-redux';
import { getDetail, clearDetail } from '../../redux/actions';
import { Link } from "react-router-dom";
import './Detail.css'
class Detail extends React.Component {
    componentDidMount(){ this.props.getDetail(this.props.match.params.id) }
    componentWillUnmount(){ this.props.clearDetail() } 



    render() {
        const { name, temperament, height, weight, life_span, img } = this.props.detalle 
    return (
        <div className="generalDetail"> 
            { Object.keys(this.props.detalle).length === 0?
            <img src='https://www.petdepotstorecr.com/images/pawsDog.gif' alt='LOADDING'/>:
            <div className="detalle">

                <h1 className='tituloDetalle'>{name}</h1>  
                <img className='imagenCarta' src={img} alt='No se encontro imagen'/>
                <h2 className='subtituloDetalle'>{temperament}</h2>
                <h2 className='parrrafoDetalle'>Altura: {height}</h2>
                <h2 className='parrrafoDetalle'>Peso: {weight}</h2> 
                <h2 className='parrrafoDetalle'>Estimado de vida: {life_span}</h2>
                <Link to="/inicio" className='homeBotonDetalle'>Home</Link> 
              
            </div>}
            
    
        </div>
    )}
}
const mapStateToProps=(state)=>{
    return{detalle: state.detail}
}
function mapDispatchToProps(dispatch){
    return{
        getDetail: id => dispatch(getDetail(id)),
        clearDetail: ()=> dispatch(clearDetail()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);