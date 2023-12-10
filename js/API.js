const url = `http://localhost:4000/clientes`

export const nuevoCliente = async cliente => {
    //Creamos el objeto de configuracion del fetch
    try {
       await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}

export const obtenerClientes = async () => {
    try {
        const result = await fetch(url)
        const clientes = await result.json()
        return clientes
    } catch (error) {
        console.log(error)
    }
}