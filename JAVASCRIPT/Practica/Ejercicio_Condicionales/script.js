//Ejercicio 1//
let FunctionNumberLenght = () =>{
    let num = prompt(`Ingrese un numero`);
    let lenght = num.length

    if (isNaN(num) == false && lenght > 0) {
        alert("Es es un numero");
        alert(`El numero mide ${lenght}`);
    } else {
        alert("No es un numero");
    }
}

//Ejercicio 2//

let FunctionAge = () => {
    let age  = prompt(`Ingresa tu edad`);

    if (age >= 18) {
        alert(`Eres mayor de edad`);
    } else {
        alert(`Eres menor de edad`);
    }
}

//Ejercicio 3//

let FunctionHelado = () => {

let Helado = prompt(`Que sabor de helador quieres ?`);
let Cobertura = confirm(`Quieres cobertura de chocolate ?`);

if (Cobertura == true) {
    alert(`Su helado sabo ${Helado} con cobertura de chocolate cuesta 180$`);
} else {
    alert(`Su helado sabor ${Helado} cuesta 150$`);
}
}
//Ejercicio 4//

let FunctionNumeroParImpar = () => {

let numOne = parseInt(prompt(`Ingrese un numero`));
let numTwo = parseInt(prompt(`Ingrese otro numero`)); 

if (isNaN(numOne) == false && isNaN(numTwo) == false) {
    let resultado = numOne + numTwo ;
    alert(resultado);
    if (resultado % 2 == 0){
        alert(`El numero es par`);
    }else{
        alert(`El numero es impar`);
    }
}else {
    alert(`No ingreso un numero`)
}
}
//Ejercicio 5//

let FunctionNumeroPositivoNegativo = () => {

let num = parseInt(prompt(`Ingrese un numero`));

if (num == 0){
    alert(`Es cero`);
}else if (num > 0){
    alert(`Es positivo`);
}else {
    alert(`Es negativo`);
}
}
//Ejercicio 6//

let FunctionPago = () => {

let paid = parseInt(prompt(`Ingresa cuanto vas a pagar`));

if (paid > 2000) {
    let sale = (0.1 * paid);
    paid = paid - sale;
    alert(`Debes pagar ${paid}`);
}else {
    alert(`Debes pagar ${paid}`);
}

}
//Ejercicio 7//

let FunctionDigitCharacter = () => {

let text = prompt(`Ingrese un texto`);
let digit = prompt(`Ingrese un digito`);
let character = text[digit];

if (character == "a" ||
    character == "e" ||
    character == "i" || 
    character == "o" ||
    character == "u") {
    alert(`La letra es ${character} y es una vocal`);
} else {
    alert(`La letra es ${character} y es un consonante`);
}
}

//Ejercicio 8//


let FunctionNotas = () => {

do {
    nota = prompt(`Ingrese su nota`);
} while (nota <= 0 || nota > 10);

if (nota >= 1 && nota <= 3) {
    alert(`Estas aplazado`);
} else if (nota >=4 && nota <= 5) {
    alert(`Estas reprobado`);
} else {
    alert(`Estas aprobado`);
}

}

//Ejercio 9//

let FunctionCompareNumero = () => {

let numOne = parseInt(prompt(`Ingrese un numero`));
let numTwo = parseInt(prompt(`Ingrese otro numero`));

if (numOne > numTwo) {
    alert(`El primer numero es Mayor`);
} else if (numTwo > numOne){
    alert(`El segundo numero es Mayor`);
}else if (numOne == numTwo) {
    alert(`Los dos numeros son Iguales`);
}
}


//Ejercio 10//

let FunctionMeses = () => {

let mes = prompt(`Ingrese un mes`);

if (mes == 1 ||
    mes == 3 ||
    mes == 5 ||
    mes == 7 ||
    mes == 8 ||
    mes == 10||
    mes == 12){
        alert(`El mes tiene 31 DIAS`);
    }
    else if(mes == 4 ||
            mes == 6 ||
            mes == 9 ||
            mes == 11){
        alert(`El mes tiene 30 DIAS`);       
            }
    else if(mes == 2){
        alert(`El mes tiene 28 DIAS`);
    }
}

//Ejercicio 11//

let FunctionNumeroMayor = () => {

let NumOne = parseInt(prompt(`Ingrese el primero numero`));
let NumTwo = parseInt(prompt(`Ingrese el segundo numero`));
let NumThree = parseInt(prompt(`Ingrese el tercer numero`));

if (NumOne > NumTwo && NumOne > NumThree) {
    alert(`El primer numero es MAYOR`);
}else if (NumTwo > NumOne && NumTwo > NumThree){
    alert(`El segundo numero es MAYOR`);
}else if (NumThree > NumOne && NumThree > NumTwo){
    alert(`El tercer numero es MAYOR`);
}
}

//Ejercicio 12//

let FunctionBebidas = () => {

    let Edad = prompt(`Ingrese su edad`);
    let Bebidas = prompt(`Eliga una bebida (Cerveza, Jugo, Agua)`);
    let Pago = prompt(`Ingrese con cuanto va a pagar`); 
    let Vuelto = 0;

    if (Edad < 18 && (Bebidas == "Cerveza" || Bebidas == "cerveza")) {
        alert(`Eres menor de edad, no puedes comprar cerveza`);

    }
    if ((Bebidas == "Cerveza" || Bebidas == "cerveza")) {
        alert(`La cerveza cuesta $50`);
        if (Pago > 50) {
            Vuelto = Pago - 50;
            alert(`Tu vuelto es ${Vuelto}`)
        }else if (Pago < 50){
            alert(`No es suficiente para su compra`);
        }
    }
    if ((Bebidas == "Jugo" || Bebidas == "jugo")) {
        alert(`El jugo cuesta $20`)
        if (Pago > 20){
            Vuelto = Pago - 20;
            alert(`Su vuelto es ${Vuelto}`);
        }else if (Pago < 20){
            alert(`No es suficiente para su compra`);
        }
    }
    if ((Bebidas == "Agua" || Bebidas == "agua")){
        alert(`El agua cuesta 10$`);
        if (Pago > 10){
            Vuelto = Pago - 10;
            alert(`Su vuelto es ${Vuelto}`);
        }else if (Pago < 10){
            alert(`No es suficiente para su compra`);
        }
    }
}

//Ejercicio 13//

let FunctionNumeroMes = () =>{
    let NumeroDeMes = parseInt(prompt(`Ingrese numero del mes`));
    let Meses = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
                "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let Mes = Meses[NumeroDeMes];

    alert(`El mes es ${Mes}`);
}

//Ejercicio Bonus 1//

let FunctionClaveUsuario = () =>{
    let clave = 7411
    let balance = 40000;
    let usuario = parseInt(prompt(`Ingrese su clave`));

    if (usuario == clave){
        let retirar = parseInt(prompt(`Ingrese cuanto va a retirar`));
            if (retirar < balance) {
                alert(`Puede retirar su dinero`);
            }else {
                alert(`No hay suficiente dinero en la cuenta`);
            }
    }else {
        alert(`Clave incorrecta`);
    }       
    
}

FunctionClaveUsuario()