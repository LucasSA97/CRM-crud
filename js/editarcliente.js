import { getClientId, editarClient } from './API.js'
import { mostrarAlerta, validar } from './funciones.js'

(function(){

    const nombreInput = document.querySelector('#nombre')
    const empresaInput = document.querySelector('#empresa')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
        const parametroUrl = new URLSearchParams(window.location.search)
        const idClient = parseInt( parametroUrl.get('id'))
        const cliente = await getClientId(idClient)
        showClientId(cliente)

        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit', validarCliente)
    })

    function showClientId(cliente) {
        const {nombre, empresa, email, telefono, id } = cliente

            nombreInput.value = nombre
            idInput.value = id
            empresaInput.value = empresa
            emailInput.value = email
            telefonoInput.value = telefono

    }

    function validarCliente(e) {
        e.preventDefault()

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value 
         }

        if( validar(cliente) ) {
            mostrarAlerta('no validado') 
            return
        }

        //Reescribir el obj
        editarClient(cliente)
         
    }

    }

)()