const fs = require('fs')
const path = require('path');
let directorio = {}
let mensaje = {}
directorio.crear = function (name) {
    if (fs.existsSync(`./chernobil/${name}/`)) {
       
       mensaje.tal = ''
        mensaje.tal = 'el directorio ya existe'
       // console.log(mensaje);
        return  false
    } else {
        fs.mkdir(`./chernobil/${name}/`,function (error) {
            if (error) {
                console.log(error);
            }
            mensaje.tal = ''
            mensaje.tal = 'directorio creado'
            // console.log(mensaje);
           return false
        })
      //path.join(__dirname, name)
       // cómo subir varios niveles en node js desde __dirname y crear un directorio con mkdir
    }
   
}

module.exports = [directorio,mensaje] 