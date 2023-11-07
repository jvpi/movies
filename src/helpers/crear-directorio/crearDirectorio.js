const fs = require('fs')
let directorio = {}
directorio.crear = function (name) {
    if (fs.existsSync(name)) {
        console.log('el directorio ya existe');
    } else {
        fs.mkdir(name,function (error) {
            if (error) {
                console.log(error);
            }
            console.log('directorio creado');
            
        })
    }
   
}
module.exports = directorio