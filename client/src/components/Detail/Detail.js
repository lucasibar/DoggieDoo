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


                <Link to="/inicio">HOME</Link> 
                <img className='imagenCarta' src={img} alt='No se encontro imagen'/>
                <h1>{name}</h1>  
                <h2>{temperament}</h2>  
                <h2>Altura: {height}</h2>
                <hr/>
                <h2>Peso: {weight}</h2> 
                <h2>Estimado de vida: {life_span}</h2>
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