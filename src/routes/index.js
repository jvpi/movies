var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index.js')
const adminController = require('../controllers/admin/index.js')
let multer = require('multer')
let storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'mr-robot')
    },
    filename:function (req,file,cb) {
        //file.originalname = 'imagen'
        console.log(file);
        cb(null,`${file.originalname}`)
    }
})
let carga = multer({
    storage:storage
})

//carga.single('avatar'),
router.get('/',indexController.renderIndex);
router.get('/serie/' ,indexController.video);
router.get('/admin/' ,adminController.render);
router.post('/',  indexController.subirArchivos);
module.exports = router;
//