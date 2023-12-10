(function(){
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', validarCliente)


    function validarCliente(e){
        e.preventDefault()

        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
         }

        if( validar(cliente) ) {
            console.log('no validado') 
            return
        }
        console.log('validado')
    }

    function validar(obj){
        return !Object.values(obj).every( input => input !== '')
    }
})()