import { 
  GET_ALL_DOGS, 
  GET_DETAIL_DOGS, 
  CLEAR_DETAIL_DOGS,
  PESO_MAY_MEN, 
  ORDENER_A_Z,
  PAGINA_ACTUAL,
  DOGS_API,
  DOGS_BDD,
  SEARCH,
  CLEAR_FILTROS,
  RESET,
  DISMINUIR_BOTON,
  AUMENTAR_BOTON,
} from '../actions/index.js'

const initialState = {
  dogs: [],
  detail:{},
  dogsRender:[],
  ordenadoMayMen: "MENOR-MAYOR",
  ordenadoAZ: 'A-Z',
  paginaActual: 0,

};

const rootReducer = (state = initialState, action) => {
switch(action.type) {
case GET_ALL_DOGS:
  return {
    ...state,
    dogs: action.payload
    
}
case GET_DETAIL_DOGS:
  return {
    ...state,
    detail: action.payload
}
case CLEAR_DETAIL_DOGS:
  return {
    ...state,
    detail: {}
}
case PESO_MAY_MEN: 
if(!state.dogsRender.length  && state.ordenadoMayMen==="MENOR-MAYOR"){
      let dogsCopy = [...state.dogs]
      .filter(e=> e.weight[0] !== "N")
      .map(e=> {
            e.weight= parseInt(e.weight.split(" - ")[0])
          return e
      })
      .sort((a, b) => a.weight - b.weight);
      return {
        ...state,
        dogsRender: dogsCopy,
        ordenadoMayMen: "MAYOR-MENOR"
      } 
}else if(state.dogsRender.length>0 && state.ordenadoMayMen === "MAYOR-MENOR"){
      let dogsCopy = [...state.dogsRender]
      let MayMen = dogsCopy.reverse()
      return {
        ...state,
        dogsRender: MayMen,
        ordenadoMayMen: "MENOR-MAYOR"
  } 
}else if(state.dogsRender.length>0 && state.ordenadoMayMen === "MENOR-MAYOR"){
      let dogsCopy = [...state.dogsRender]
      .filter(e=> e.weight[0] !== "N")
      .map(e=> {
        if(e.weight == String() ){e.weight= parseInt(e.weight.split(" - ")[0])}
      return e
      })
      .sort((a, b) => a.weight - b.weight);
      return {
        ...state,
        dogsRender: dogsCopy,
        ordenadoMayMen: "MAYOR-MENOR"
      } 
}
break
case ORDENER_A_Z:
  if(state.dogsRender.length===0 && state.ordenadoAZ==='A-Z'){
        let dogsCopyAlf = [...state.dogs];
        dogsCopyAlf.sort((a, b) => ((a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1));
        return {
          ...state,
          dogsRender: dogsCopyAlf,
          ordenadoAZ: 'Z-A'
        } 
  }else if(state.ordenadoAZ === 'Z-A'){
        let dogsCopyAlf = [...state.dogsRender].reverse()
        return {
          ...state,
          dogsRender: dogsCopyAlf,
          ordenadoAZ: 'A-Z'
        } 
  }else if(state.dogsRender.length>0 && state.ordenadoAZ === 'A-Z'){
        let dogsCopyAlf = [...state.dogsRender];
        dogsCopyAlf.sort((a, b) => ((a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1));
        return {
          ...state,
          dogsRender: dogsCopyAlf,
          ordenadoAZ: 'Z-A'
        } 
  }
  break
  case PAGINA_ACTUAL:
    return {
      ...state,
      paginaActual: action.payload
  }
  case DISMINUIR_BOTON:
  return {
    ...state,
    paginaActual: parseInt(state.paginaActual) - 1
}
case AUMENTAR_BOTON:
  return {
    ...state,
    paginaActual: parseInt(state.paginaActual) + 1
}


case DOGS_API:
    return {
      ...state,
      dogsRender: state.dogs.filter(d=> d.id < 10000),
      filtroDOG: true,
      paginaActual:0
    } 
case DOGS_BDD:
      return {
        ...state,
        dogsRender: state.dogs.filter(d=> d.id.length > 5),
        filtroDOG: true,
        paginaActual:0
} 
case CLEAR_FILTROS:
  return {
    ...state,
    dogs: action.payload,
    dogsRender: [],
    ordenadoMayMen: "MENOR-MAYOR",
    ordenadoAZ: 'A-Z',
    paginaActual: 0,
    filtroDOG: false
}
case RESET:
  return{
    ...state,
    dogs: []
  }
case SEARCH:
  if(action.payload.length===0) alert('No se encontro relacion con la buqueda. por favor intente denuevo')
  return{
    ...state,
    dogsRender: action.payload  
}
case RESET:
  return{
    ...state,
    dogs: []
  }
default: return state
};
};

export default rootReducer;

