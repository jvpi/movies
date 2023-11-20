var express = require('express');                                           
var router = express.Router();
const indexController = require('../controllers/index.js')
const adminController = require('../controllers/admin/index.js')
const crearCarpetaController = require('../controllers/admin/crearCarpeta.js')
let multer = require('multer')
let storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'chernobil')
       
    },
    filename:function (req,file,cb,next) {
        //file.originalname = 'imagen'  console.log(file); 
        cb(null,`${file.originalname}`)
    }
})
let carga = multer({
    storage:storage
})

// carga.single('file'),
router.get('/',indexController.renderIndex);
router.get('/serie/' ,indexController.video);
router.get('/crearCarpeta' ,crearCarpetaController.render);
router.post('/crearCarpeta', crearCarpetaController.crearCarpeta);
router.post('/', carga.array('file'), indexController.subirArchivos);
router.get('/admin',adminController.render);
module.exports = router;
//