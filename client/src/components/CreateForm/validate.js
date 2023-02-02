export const initialState= {
    name:"",
    heightMAX:"", 
    heightMIN:"",
    weightMAX:"", 
    weightMIN:"",
    life_span:"",
    temperamentos:[]
}

function validate({ name, heightMAX, heightMIN, weightMAX, weightMIN, life_span, }){
    let error ={}
    // if(/[0-9\+\-\*\/\^\!\?\@\#\$\%\&\(\)\,\.\:\;\'\"]/i.test(name)) error.name = "Este campo solo reconoce caracteres de letras"
    if(!/^[a-zA-Z ]+$/.test(name)&& name.length>0) error.name = "Este campo solo reconoce caracteres de letras"
    if(heightMAX<heightMIN && heightMAX.length>0&&heightMIN.length>0) error.heightMAX = "La altura maxima no puede superar la minima"
    if(weightMAX<weightMIN && weightMAX.length>0&&weightMIN.length>0) error.weightMAX = "El peso maximo no puede superar el minimo"
    if(!/^[0-9]+$/.test(heightMAX)&& heightMAX.length>0) error.heightMAX = "Este campo solo reconoce numeros"
    if(!/^[0-9]+$/.test(heightMIN)&& heightMIN.length>0) error.heightMIN = "Este campo solo reconoce numeros"
    if(!/^[0-9]+$/.test(weightMAX)&& weightMAX.length>0) error.weightMAX = "Este campo solo reconoce numeros"
    if(!/^[0-9]+$/.test(weightMIN)&& weightMIN.length>0) error.weightMIN = "Este campo solo reconoce numeros"
    if(life_span>20) error.life_span = "Los años ingresados son exesivos para un perro"

    return error
}

export default validate
// error.heightMAX
// error.weightMAX
// error.heightMAX
// error.heightMIN
// error.weightMAX
// error.weightMIN
// error.name