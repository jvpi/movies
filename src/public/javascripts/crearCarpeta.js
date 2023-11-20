let inputText = document.getElementById('text')
let form = document.getElementById('form-crearCarpeta')
form.addEventListener('submit',function (e) {
    e.preventDefault()
    let regex = /^[A-Za-z]+$/;
    if (!regex.test(inputText.value)) {
        alert('este campo requiere solo letras')
        return
    }
    this.submit()
})
