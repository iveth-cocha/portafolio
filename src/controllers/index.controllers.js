
const renderIndex = (req,res)=>{
    res.render('index')
}

const renderAbout = (req,res)=>{
    res.render('login')
}




// const renderContact =(req,res)=>{
//     res.render('contact')
// }

module.exports ={
    renderIndex, 
    renderAbout
    //renderContact
}
