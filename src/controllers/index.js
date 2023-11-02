const indexController = {}
indexController.renderIndex = function(req, res, next) {
    res.render('index');
}
indexController.subirArchivos = function (req, res) {
    console.log(req.file);
    res.redirect('/')
}
indexController.video = function(req, res, next) {
    res.send('hola');
}
module.exports = indexController