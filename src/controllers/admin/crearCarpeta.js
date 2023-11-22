const controller = {}
const directorio = require('../../helpers/crear-directorio/crearDirectorio.js')
let leerDirectorio = require('../../helpers/cobtenerDirectorio.js')
const fs = require('fs')
const path = require('path');
controller.render = function (req,res) {
    res.render('crearCarpeta')
}
controller.crearCarpeta = function (req,res) {
    let {nombreDirectorio} = req.body
    console.log(nombreDirectorio)
    if (fs.existsSync(`./chernobil/${nombreDirectorio}/`)) {
         req.flash('mensaje_directorio_ya_existe','El directorio ya existe')
         res.redirect('/crearCarpeta')
         return  false
     } else {
         fs.mkdir(`./chernobil/${nombreDirectorio}/`,function (error) {
             if (error) {
                 console.log(error);
             }
             req.flash('mensaje_directorio_creado','Directorio creado')
             res.redirect('/crearCarpeta')
            return false
         })
       //path.join(__dirname, name)
        // cómo subir varios niveles en node js desde __dirname y crear un directorio con mkdir
     }
}
module.exports = controller