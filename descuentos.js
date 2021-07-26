function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDescuento = document.getElementById("inputDisc");

    const price = inputPrice.value;
    const discount = inputDescuento.value;
    const precioFinal =calcularPrecioConDescuento(price, discount);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio final es de $" +precioFinal;
}


//console.log("El precio original es: " +precioOriginal+ ", el descuento es de " +descuento+ "%, y el precio con descuento es de $" +precioConDescuento); 