
const Portfolio = require('../models/Portfolio')
//metodo para listar los portafolios
const renderAllPortafolios = async(req,res)=>{
    //res.send('Listar todos los portafolios')
    const portfolios= await Portfolio.find().lean()
    res.render("portafolio/allPortfolios",{portfolios})
    /*a forma json
    res.json({portfolios})*/
}
//metodo para listar el detalle de un portafolio
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
//metodo para mostrar el formulario
const renderPortafolioForm = (req,res)=>{
    //res.send('Formulario para crear un portafolio')
    res.render('portafolio/newFormPortafolio')
}

//metodo para guardadr en la base de datos lo capturado en el form
const createNewPortafolio =async (req,res)=>{
    //sestructurar
    const {title, category,description} = req.body
    //nueva intancia
    const newPortfolio = new Portfolio({title,category,description})
    //guardo en la base
    await newPortfolio.save()
    //muestro resultado
    //res.json({newPortfolio})
     res.redirect('/portafolios')
}

// const createNewPortafolio = (req,res)=>{
//     //res.send('Crear un nuevo portafolio')
//     console.log(req.body);
//     res.send("Portafolio almacenado en la BDD")
    
// }

//editar
// const renderEditPortafolioForm = (req,res)=>{
//     res.send('Formulario para editar un portafolio')
// }

const renderEditPortafolioForm =async(req,res)=>{
    const portfolio = await Portfolio.findById(req.params.id).lean()
    res.render('portafolio/editPortfolio',{portfolio})
}



//actualizar en la base de datos
// const updatePortafolio = (req,res)=>{
//     res.send('Editar un portafolio')
// }
const updatePortafolio = async(req,res)=>{
    const {title,category,description}= req.body
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    res.redirect('/portafolios')
}

//eliminar datos
// const deletePortafolio = (req,res)=>{
//     res.send('Eliminar un nuevo portafolio')
// }
const deletePortafolio = async(req,res)=>{
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
}


module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}