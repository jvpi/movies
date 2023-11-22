let contentDirectorio = document.getElementById('content-directorio-mensaje')
let longitud = contentDirectorio.children.length

for (let i = 0; i < longitud; i++) {
	if (contentDirectorio.children[i].innerHTML == 'El directorio ya existe') {
		crearMensaje(contentDirectorio.children[i],'directorio-mensaje-existe')
		eliminarMensaje(contentDirectorio.children[i])
	}
	if (contentDirectorio.children[i].innerHTML == 'Directorio creado') {
		crearMensaje(contentDirectorio.children[i],'directorio-mensaje-creado')
		eliminarMensaje(contentDirectorio.children[i])
	}
}
function crearMensaje(elemento,claseCss) {
	elemento.classList.add(claseCss)
}
function eliminarMensaje(elemento) {
	setTimeout(function () {
		contentDirectorio.removeChild(elemento)
	},2000)
}