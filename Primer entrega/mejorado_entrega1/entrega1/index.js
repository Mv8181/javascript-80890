function crearTiendas(cantidadTiendas) {
    let ventas = [];

    for (let i = 1; i <= cantidadTiendas; i++) {
        let venta = Number(prompt(`Ingrese la venta de Tienda ${i}:`));
        ventas.push(venta);
    }

    return ventas;
}

function sumarTotal(array) {
    return array.reduce((a, b) => a + b, 0);
}

function calcularMayor(array) {
    return Math.max(...array);
}

function calcularMenor(array) {
    return Math.min(...array);
}

function calcularVentas() {
    let cantidadTiendas = Number(prompt("¿Cuántas tiendas desea ingresar?"));
    if (isNaN(cantidadTiendas) || cantidadTiendas <= 0) {
        alert("Cantidad inválida.");
        return;
    }

    let ventas = crearTiendas(cantidadTiendas);
    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let resultado = 'Resultados de Ventas\n\n';
    resultado += 'Total de Ventas: '+totalVentas+'\n';
    resultado += 'Venta Mayor: '+ventaMayor+'\n';
    resultado += 'Venta Menor: '+ventaMenor+'\n\n';
    resultado += 'Detalle por Tienda:\n';

    ventas.forEach((venta, index) => {
        let estado = "";
        if (venta === ventaMayor) estado = " <-- Mayor";
        if (venta === ventaMenor) estado = " <-- Menor";
        resultado +=  "Tienda " + (index+1) +": "+venta+"\n";
    });

    alert(resultado);
}

calcularVentas();

