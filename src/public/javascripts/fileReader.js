let  inputFileContent = []
 const formData = new FormData()
function validar() {
    let inputFileImg = document.getElementById('file-img') 
    let contentResultFr = document.getElementById('content-result-fileReader')
    let miniaturaFileContent = {
        img:"",
        video:""
    }
    inputFileImg.addEventListener('change',function () {
        if (!this.files && !this.files[0]) {
            alert('error de archivo')
            return 
        }
        let reader = new FileReader()
        let regexJpg = /\.jpg$/i;
        let regexMp4 = /\.mp4$/i;
        if (regexJpg.test(this.files[0].name) && miniaturaFileContent.img =='') {
                inputFileContent.push(this.files[0])
                reader.onload = function(file) {
                    miniaturaFileContent.img= file.target.result;
                    contentResultFr.innerHTML += `
                        <img class='img-result' src=${miniaturaFileContent.img}>  
                    `
                };
            reader.readAsDataURL(this.files[0]);
             formData.append('file',this.files[0])
        }
        if (regexMp4.test(this.files[0].name) && miniaturaFileContent.video== '' ) {
                inputFileContent.push(this.files[0])
                reader.onload = function(file) {
                    miniaturaFileContent.video = file.target.result;
                    contentResultFr.innerHTML += `
                    <span class="icon-film video-result"></span>
                    `
                };
                reader.readAsDataURL(this.files[0]);
                formData.append('file',this.files[0])
        }
           
    })
}

async function enviarDatos() {
    let form = document.getElementById('form')
    let btn = document.getElementById('btnsubmit')
    let nombreCarpeta = {}
    btn.addEventListener('click', async function (e) {
      if (formData.getAll('file').length != 2) {
            alert('archivos incompleto')
            return
       }
       nombreCarpeta.nombre = inputText.value
       //fetchPostJson(nombreCarpeta)
       fetchPostArchivos(formData)
    })
}


async function  fetchPostJson(data) {
   
    try {
        const respuesta = await fetch('/',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })
        const result = await respuesta.json();
        console.log("Success:", result);
       } catch (error) {
       // console.error("Error:", error);
       }
       //location.reload()
}
async function  fetchPostArchivos(data) {
    console.log(formData.getAll('file'));
    try {
        const respuesta = await fetch('/',{
            method:"POST",
            body: data
        })
        const result = await respuesta.json();
        console.log("Success:", result);
       } catch (error) {
       // console.error("Error:", error);
       }
       //location.reload()
}
enviarDatos()
validar()
