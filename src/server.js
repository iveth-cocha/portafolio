
//importa
const express = require('express')

const path =require('path')

const { engine }  = require('express-handlebars')

//inicializacion

const app = express()



//configuracion 

app.set('port',process.env.port||3000)//por si no lee el puerto especifico

app.set('views',path.join(__dirname,'views'))
//configuraciones extras
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')


//middlewares
//servidor trabaja con formularios
app.use(express.urlencoded({extended:false}))

//variables globales

//rutas
//mpo es optimo crear rutas de esta format, revisar archivo de rutas
// app.get('/',(req,res)=>{
//     res.send("server on")
// })

app.use(require('./routers/index.routes'))

app.get('/',(req,res)=>{
    res.render('index')
})



// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))



//exportar la variable
module.exports = app


