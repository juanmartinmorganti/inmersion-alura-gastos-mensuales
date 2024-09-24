let listaNombreGastos = []; 
let listaValoresGastos = [];



function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);


    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombreGastos);
    console.log(listaValoresGastos);

    //alert('Click de usuario');
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmllista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion) => {
       const valorGasto = Number(listaValoresGastos[posicion]);

       htmllista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
                        <button  onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
       //Calculamos el total de gastos
       totalGastos += Number (valorGasto);
        
    });
    
    listaElementos.innerHTML = htmllista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}


function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}