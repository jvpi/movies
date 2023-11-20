const directorio = require('../helpers/crear-directorio/crearDirectorio.js')
const indexController = {}
indexController.renderIndex = function(req, res, next) {
    res.render('index');

}
indexController.subirArchivos = function (req, res) {
    console.log(req.body);
    const {nombreCarpeta} = req.body
    let respuesta = {ok:'ok'}
    res.json(respuesta)
    //directorio.crear(nombreCarpeta)
    //res.redirect('/admin/');
}
indexController.video = function(req, res, next) {
    let serieDescipcion = {
        folder:'file',
        nombre:'  Mr. Robot Season 1 - Trailer.mp4'
    }
   // res.render('admin');
    
}
//,{serieDescipcion}  
module.exports = indexController  