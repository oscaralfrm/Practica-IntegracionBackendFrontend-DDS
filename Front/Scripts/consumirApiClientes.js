// CONSUMO DE LA API QUE CREAMOS EN EL BACKEND UTILIZANDO EL MÉTODO fetch()
// CONSEGUIR TODOS LOS CLIENTES

const conseguirTodosLosClientes = async () => {

    const respuesta = await fetch('http://localhost:4000/clientes');

    const data = await respuesta.json();

    console.log(data);

    return data;


}

// CONSEGUIR LOS CLIENTES CUYO idCliente ESTÁ ENTRE EL 5 Y EL 15

const conseguirClientesFiltrados = async () => {

    const respuesta = await fetch('http://localhost:4000/clientes');

    const data = await respuesta.json();

    return data;

}

// CONSEGUIR LOS NOMBRES Y APELLIDOS DE LOS CLIENTES

const conseguirNombreYApellidoClientes = async () => {

    const respuesta = await fetch('http://localhost:4000/clientes/nombres');

    const data = await respuesta.json();

    return data;

}


// MANIPULAMOS LA TABLA PARA CREAR REGISTROS Y ASIGNÁRSELOS

// LIMPIAR LA TABLA

const limpiarTabla = ( tabla ) => {

    while (tabla.rows.length > 0) {
        tabla.deleteRow(0);
    }

}

// CARGAR LA TABLA

const cargarTabla = async () => {

    const cuerpoTabla = document.getElementById('Datos');

    limpiarTabla(cuerpoTabla);

    try {

        const clientes = await conseguirTodosLosClientes();

        clientes.forEach( ( elemento ) => {

            // RECORDAR, COMILLAS FRANCESAS EN ASCII: ALT + 96
			// Para obtener el <tr></tr>, se lo pedimos a la tabla.

            const textoFila = `
            <th scope="row">${elemento.idCliente}</th>
            <td>${elemento.nombre}</td>
            <td>${elemento.apellido}</td>
            <td>${elemento.fechaAfiliacion}</td>
            <td>${(elemento.premium === true ? "Si" : "No")}</td>
            `;

            const fila = cuerpoTabla.insertRow(cuerpoTabla.rows.length)
            fila.innerHTML = textoFila;

        })

    } catch ( error ) {

        console.log("Error: " + error);


    }

}


// Creamos una función que permita manipular el DOM, tan pronto se cargue el resto del HTML.

document.addEventListener('DOMContentLoaded', async ( evento ) => {

    await cargarTabla();

})