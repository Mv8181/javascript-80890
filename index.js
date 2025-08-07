function crearTiendas(cantidadTiendas) {
    let ventas = [];

    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
        let textoEtiqueta = "Tienda " + conteoTiendas;
        let valorVenta = Number(prompt("Ingrese la venta de " + textoEtiqueta + ":"));
        ventas.push(valorVenta);
    }

    return ventas;
}

function sumarTotal(array) {
    let total = 0;
    for (let venta of array) {
        total += venta;
    }
    return total;
}

function calcularMayor(array) {
    let maximo = array[0];
    for (let venta of array) {
        if (venta > maximo) {
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array) {
    let minimo = array[0];
    for (let venta of array) {
        if (venta < minimo) {
            minimo = venta;
        }
    }
    return minimo;
}

function calcularVentas() {
    let cantidadTiendas = Number(prompt("¿Cuántas tiendas desea ingresar?"));
    let ventas = crearTiendas(cantidadTiendas);

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    console.log("Ventas ingresadas:", ventas);
    console.log("Total de Ventas:", totalVentas);
    console.log("Venta Mayor:", ventaMayor);
    console.log("Venta Menor:", ventaMenor);

    console.log("\nDetalle por tienda:");
    ventas.forEach((venta, index) => {
        let estado = "";
        if (venta === ventaMayor) estado = " <-- Mayor";
        if (venta === ventaMenor) estado = " <-- Menor";
        console.log(`Tienda ${index + 1}: ${venta}${estado}`);
    });
}

// Ejecuta el flujo completo
calcularVentas();
