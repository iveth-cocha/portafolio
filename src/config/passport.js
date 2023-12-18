
//exportar passport
const passport = require('passport')

//importo el modelo
const User = require('../models/User')


//establecer la estartegia
const LocalStrategy = require('passport-local').Strategy


//implementar la estrategia local
passport.use(new LocalStrategy({
    //campos del formlario

    //si incio por redes socuiales aqui debe ir esa configuracion
    usernameField:'email',
    passwordField:'password'

    //funcion de incio de seción
},async(email,password,done)=>{
    //buscar el usuario en base al email
    const userBDD = await User.findOne({email})
    //si no existe
    if(!userBDD) return done("Lo sentimos, el email no se encuentra registrado",false,)
    //desencriptar el pasword
    const passwordUser = await userBDD.matchPassword(password)
    
    if(!passwordUser) return done("Lo sentimos, los passwords no coinciden",false)

    //retornar el usuario de la bdd
    return done(null,userBDD)
}))



passport.serializeUser((user,done)=>{
    done(null,user.id)
})


passport.deserializeUser(async (id, done) => {
    const userDB  = await User.findById(id).exec();
    return done(null,userDB)
});