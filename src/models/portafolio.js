//importar el esquema portafolio
const {Schema, model} = require('mongoose')


//crear esquema 
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

//exportar el modelo

                        //igualdad de nombres
module.exports = model('portfolio',portfolioSchema)