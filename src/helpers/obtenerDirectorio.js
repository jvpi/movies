const fs = require('fs')
const path = require('path');
let obtenerDirectorio = {}

obtenerDirectorio.leer = function () {
	console.log(fs.readdirSync('./chernobil'))
}
module.exports = obtenerDirectorio