//importo
const mongoose = require('mongoose')


//CADENA DE CONEXION A LA BD
//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'
const MONGODB_URI = 'mongodb://localhost:27017/portfolio'

//CRAR UN METODO PARA HACER LA CADENA DE CONEXION
connection = async()=>{
    try {
        //invoco al metodo conect
         await mongoose.connect(MONGODB_URI)
         //respuesta de la promesa si es correcta
        console.log("CONEXION A LA BASE DE DATOS EXITOSA")
    } catch (error) {

        
        console.log(error);
    }
}

//exportar el conect
module.exports = connection