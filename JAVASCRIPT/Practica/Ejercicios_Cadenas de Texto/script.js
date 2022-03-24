//Ejercicio 1//

// let letra = "a";

// let texto = prompt("Ingrese un texto");

// if (texto.includes(letra)) {
//     alert("El texto contiene la letra a");
//}else {
//    alert("El texto no contiene la letra a");
//}

//Ejercicio 2//

//let textoMayuscula = texto.toUpperCase();
//alert (textoMayuscula);
//let textoMinuscula = texto.toLowerCase();
//alert(textoMinuscula);

//Ejercicio 3//
//let PrimerCaracter = texto.charAt(0);
//alert(`El texto comienza con la letra: ${PrimerCaracter}`);

//Ejercicio 4//
//let lenght = texto.length;
//alert(`El texto tiene ${lenght} caracteres`)

//Ejercicio 5//
let number = prompt("Ingre un numero");
let digitos = number.length;

alert(digitos);

//Ejercicio 6//
let palabra = prompt("Ingrese una palabra");
let UltimaLetra = palabra.charAt(palabra.length - 1);
alert(`La ultima letra es ${UltimaLetra}`);

//Ejercicio 7//
let text = prompt("Ingrese un texto");
let ChangeText = text.replace(/\s+/g, '*');
alert(ChangeText);

//Ejercicio 8//

let character = prompt("Ingrese una letra");

do {
    alert("Ingresa una sola letra")
    character = prompt("Ingresa una letra");
} while (character.length > 1 || character.length == 0); 

let textChain = prompt("Ingresa un texto")
if (textChain.includes(character)) {
    alert("El texto contiene la letra indicada");
}else {
    alert("El texto No contiene la letra indicada");
}

//Ejercicio 9//

let firstCharacter = textChain.charAt(0);
let textChainChange = textChain.replace(firstCharacter,``);
alert(textChainChange);

//Ejercicio 10//

let name = prompt("Ingresa tu nombre en minuscula");
let nameLowerCase = name.toLowerCase();
let firstCharacterName = name[0]; 
let firstCharacterNameUpperCase = firstCharacterName.toUpperCase();

if (name == nameLowerCase) {
    name = name.replace(firstCharacterName, firstCharacterNameUpperCase);
    alert(`Tu nombre es ${name}`);

}else {
    alert("ingresa tu nombre en minuscula");
}