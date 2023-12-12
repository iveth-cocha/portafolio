
//importar
const {Router} = require('express')


//{tambien llamo}
const {renderIndex,renderAbout} = require('../controllers/index.controllers.js')


//instancio
const router = Router()

// router.get('/',(req,res)=>{
//     res.render('index')
// })

// router.get('/login',(req,res)=>{
//     res.render('login')
// })

// module.exports = router


router.get('/',renderIndex)
router.get('/login',renderAbout)

// router.get('/contactos',renderContact )

module.exports = router