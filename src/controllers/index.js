const directorio = require('../helpers/crear-directorio/crearDirectorio.js')
const indexController = {}
indexController.renderIndex = function(req, res, next) {
    res.render('index');

}
indexController.subirArchivos = function (req, res) {
    const {nombreCarpeta} = req.body
  
    directorio.crear(nombreCarpeta)
    res.redirect('/')
}
indexController.video = function(req, res, next) {
    let serieDescipcion = {
        folder:'file',
        nombre:'  Mr. Robot Season 1 - Trailer.mp4'
    }
    res.render('movies',{serieDescipcion});
}

module.exports = indexController