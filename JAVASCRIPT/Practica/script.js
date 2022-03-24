// nombre = prompt("Ingresa tu nombre");
// if (nombre == "Gabriel") {
//     alert("Buenos dias Gabriel");
// } else {
//     alert("Buenos dias extraño");
// }

// const saludar = (nombre) => {
//     if (nombre == "Gabriel") {
//         alert("Hola como estas " + nombre);
//     } else {
//         alert("Hola como estas extraño");
//     }
    
// }

// saludar(prompt("Ingresa tu nombre: "));

// const cuenta = (num1 , num2) => {
//     let resultado = (num1 + num2);
//     alert(resultado);
// }

// cuenta ();

//////////////////
const ejercicio1 = () => {

let edad = prompt("Ingresa tu edad")

if (edad >= 18) {
    alert("Ya puedes conducir");
}else {
    alert("Eres menor para conducir");
}
}
//////////////////

const ejercicio2 = () =>{

let numero = prompt("Ingresa tu calificación");

if (numero <= 3) {
    alert("Muy deficiente");
}else if (numero < 5) {
    alert("Insuficiente");
}else if (numero < 6){
    alert("Suficiente");
}else if (numero < 7){
    alert("Bien");
}else if (numero < 9){
    alert("Notable");
}else if (numero >= 9 && numero <= 10){
    alert("Sobresaliente");
}
}
//////////////////
const ejercicio3 = () =>{

let resultado = "" ;
do {
    let cadena = prompt("Ingrese texto");
    if (resultado == "") {
        resultado = resultado + cadena;
}else {
    resultado = resultado + "-" + cadena;
}
    
} while (confirm("Desea seguir ?"));

alert(resultado);
}
//////////////////

let zombieLife = 50 ;
let daño = 10;
let vidaJugador = 50 ;

do {
    let atacar = confirm("Quieres atacar al zombie ?");
    if (atacar == true) {
        zombieLife -= daño ;
        alert(`Le hiciste ${daño} de daño, el zombie tiene ${zombieLife} de vida`);
    }else if (atacar == false ){
        vidaJugador -= daño;
        alert("No le has echo daño");
        alert(`El zombie te a echo ${daño} de daño, tienes ${vidaJugador} de vida`);
    }
    //zombieLife = zombieLife - daño ;
    //alert(`El zombi tiene ${zombieLife} de vida`);

} while (zombieLife > 0 && vidaJugador > 0);

if (zombieLife <= 0) {
    alert("Mataste al zombie");
}else if (vidaJugador <=0) {
    alert("El zombie te a matado");
}

