window.addEventListener(`load`,()=>{
   const form = document.querySelector('#formulario')
   const pass = document.getElementById('pass')
   const passConfirma = document.getElementById('passConfirma')

   form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validaCampos()
   })

   const validaCampos = () => {

    const passValor = pass.value.trim();
    const passConfirmaValor = passConfirma.value.trim()

//Sin contener espacio vacios
    if(!passValor){
        validaFalla(pass, 'Campo Vacio')
    } 
    else if( passValor.length < 4){
        validaFalla(pass, 'Debe tener 4 caracteres minimo.')
        console.log(passValor)
    }
    else if( passValor.length > 16){
        validaFalla(pass, 'Debe tener 16 caracteres maximo.')
        console.log(passValor)
    }
    else if (passValor.search(/[a-z]/) < 0) {
        validaFalla(pass, 'Debe tener almenos 1 minusculas.')
        console.log(passValor)
    }
    else if (passValor.search(/[A-Z]/) < 0) {
        validaFalla(pass, 'Debe tener almenos 1 mayusculas.')
        console.log(passValor)
    }
    else if (passValor.search(/[1-9]/) < 0) {
        validaFalla(pass, 'Debe incluir 1 numero mayor a cero.')
        console.log(passValor)
    }
    else if (passValor.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
        validaFalla(pass, 'Debe contener almenos 1 Simbolos.')
        console.log(passValor)
    }
    else{
        validaOk(pass)

    }
    if(!passConfirmaValor){
        validaFalla(passConfirma, 'Confirme contraseña.')
    }
    else if(passValor !== passConfirmaValor){
        validaFalla(passConfirma, 'Contraseñas no coinciden.')

    }
    else{
        validaOk(passConfirma,'Se guardo contraseña.')

    }
   }
   const validaFalla = (input, msje) =>{ 
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = ' form-control falla'
 }

 const validaOk = (input, msje) => {
     const formControl = input.parentElement

     formControl.className = 'form-control ok'
 }


})