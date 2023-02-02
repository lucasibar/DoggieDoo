export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DETAIL_DOGS = "GET_DETAIL_DOGS";
export const CLEAR_DETAIL_DOGS = "CLEAR_DETAIL_DOGS";
export const PESO_MAY_MEN = "PESO_MAY_MEN";
export const ORDENER_A_Z = "ORDENER_A_Z";
export const PAGINA_ACTUAL = "PAGINA_ACTUAL";
export const DOGS_API = "DOGS_API";
export const DOGS_BDD = "DOGS_BDD";
export const SEARCH = "SEARCH";
export const CLEAR_FILTROS = "CLEAR_FILTROS";
export const RESET = "RESET"
export const DISMINUIR_BOTON ="DISMINUIR_BOTON"
export const AUMENTAR_BOTON = "AUMENTAR_BOTON"
export const SEARCHFALLO = "SEARCHFALLO"





export const getAllDogs = () => dispatch => {
    dispatch({type: RESET})
    return fetch(`http://localhost:3001/dogs`)
    .then(r => r.json())
    .then(data => {dispatch({type: GET_ALL_DOGS, payload: data})})
}
export const getDetail = (id) => dispatch => {
    dispatch({type: RESET})
    return fetch(`http://localhost:3001/dogs/${id}`)
    .then(r => r.json())
    .then(data => {dispatch({type: GET_DETAIL_DOGS, payload: data})})
}
export const clearDetail = () => {
    return {type: CLEAR_DETAIL_DOGS}
}
export const setPaginaActual= (pagina) => {
    return{
        type: PAGINA_ACTUAL,
        payload: pagina
    }
}
export const disminuirBoton= () => {
    return{type: DISMINUIR_BOTON}
}
export const aumentarBoton= () => {
    return{type: AUMENTAR_BOTON}
}
export const pesoMayMen= () => {
    return{type: PESO_MAY_MEN}
}
export const nombreAZ= () => {
    return{type: ORDENER_A_Z}
}
export const dogsApi= () => {
    return{type: DOGS_API}
}
export const dogsBDD= () => {
    return{type: DOGS_BDD}
}
export const search= (busqueda) => dispatch => {
    return fetch(`http://localhost:3001/search/${busqueda}`)
    .then(r => r.json())
    .then(data => {dispatch({type: SEARCH, payload: data})})
}
export const clearFiltros= () => dispatch => {
    dispatch({type: RESET})
    return fetch(`http://localhost:3001/dogs`)
    .then(r => r.json())
    .then(data => {dispatch({type: CLEAR_FILTROS, payload: data})})
}

