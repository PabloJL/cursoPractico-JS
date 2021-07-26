// usaremos const porque no cambiaremos el valor de la variable
//Codigo del cuadrado
// console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " +ladoCuadrado+ "cm");

 function perimetroCuadrado(lado){
     return lado * 4;
 }

 function areaCuadrada(lado){
     return lado**2;
 }


// const areaCuadrada = ladoCuadrado ** 2;
// console.log("El área del cuadrado es de: " +areaCuadrada+ "cm^2");

// console.groupEnd();

//Codigo del Triángulo
// console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1,lado2,base){
     return lado1+lado2+base;
}

function areaTriangulo(base,altura){
     return (base*altura)/2;
}

// console.log("Los lados del triangulo miden: " +ladoTriangulo1+ "cm, "+ladoTriangulo2+"cm, la base " +baseTriangulo+"cm, y la altura " +alturaTriangulo+"cm.");

// const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
// console.log("El perímetro del triángulo es de: " +perimetroTriangulo+ "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El área del triángulo es de: " +areaCuadrada+"cm^2");

// console.groupEnd();

//Codigo del Circulo
// console.group("Circulo");

// const radioCirculo = 4;
function diametroCirculo(radio){
     return radio * 2;
 }
 const PI= Math.PI;

function perimetroCirculo(radio){
     const diametro = diametroCirculo(radio);
     return diametro * PI;
 }

function areaCirculo(radio){
    return PI * (radio**2);
}
// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = PI * (radioCirculo**2);

// console.log("El perimetro del círculo es de: " +perimetroCirculo+" cm y el área es de " +areaCirculo+" cm^2.");

// console.groupEnd();


//Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrada(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrada(value);
    alert(area);

}


//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const base = document.getElementById("inputBase");
    const value1 = parseInt(lado1.value); 
    const value2 = parseInt(lado2.value);
    const valueB = parseInt(base.value);
    const perimetro = perimetroTriangulo(value1,value2,valueB);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const altura = document.getElementById("inputAltura");
    const valueBase = base.value;
    const valueAltura = altura.value;
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);

}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputRadio")
    const valueRadio = radio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro)

}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadio")
    const valueRadio = radio.value;

    const area = areaCirculo(valueRadio);
    alert(area)
}