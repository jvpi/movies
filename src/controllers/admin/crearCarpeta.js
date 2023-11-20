const controller = {}
const directorio = require('../../helpers/crear-directorio/crearDirectorio.js')
const fs = require('fs')
const path = require('path');
controller.render = function (req,res) {
    res.render('crearCarpeta')
}
controller.crearCarpeta = function (req,res) {
    let {nombreDirectorio} = req.body
    if (fs.existsSync(`./chernobil/${nombreDirectorio}/`)) {
         //console.log('el directorio ya existe');
         req.flash('mensaje','el directorio ya existe')
         //console.log(req.flash('mensaje'));
         res.redirect('/crearCarpeta')
         return  false
     } else {
         fs.mkdir(`./chernobil/${nombreDirectorio}/`,function (error) {
             if (error) {
                 console.log(error);
             }
            // console.log('directorio creado');
             req.flash('mensaje','directorio creado')
            // console.log(req.flash('mensaje'));
             res.redirect('/crearCarpeta')
            return false
         })
       //path.join(__dirname, name)
        // cómo subir varios niveles en node js desde __dirname y crear un directorio con mkdir
     }
}
module.exports = controller