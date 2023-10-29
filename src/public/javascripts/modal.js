let modal = document.getElementById('modal')
function abrirModal() {
    let btnPlay = document.getElementById('button-play')
    btnPlay.addEventListener('click',function () {
        modal.style.display = 'block'
    })
}
function cerrarModal() {
    let btnCross = document.getElementById('icon-cross')
    btnCross.addEventListener('click',function () {
        modal.style.display = 'none'
    })
}
abrirModal()
cerrarModal()