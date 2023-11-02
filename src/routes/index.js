var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index.js')

let multer = require('multer')
let storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'cargas')
    },
    filename:function (req,file,cb) {
        cb(null,`${file.originalname}`)
    }
})
let carga = multer({
    storage:storage
})
router.get('/',indexController.renderIndex);
router.get('/video',indexController.video);
router.post('/',carga.single('avatar'),  indexController.subirArchivos);
module.exports = router;
//