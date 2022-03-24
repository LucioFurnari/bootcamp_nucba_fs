//Ejercicio 1//

let FunctionEjercicio1 = () => {

let text = "" ;
for (let i = 0; i < 11 ; i++){
    text += i + "<br>";
}

document.getElementById("demo").innerHTML = text;

}

//Ejercicio 2//

let FunctionEjercicio2 = () =>{
    let resultado = 0;
    let contador = 0
        do {
            let num = parseInt(prompt(`Ingrese un numero`));
            resultado += num;
            contador += 1;
        } while (contador < 5);

        alert(resultado);
}


//Ejercicio 3//

let FunctionEjercicio3 = () => {
    let cantidad = prompt(`Cuantos numeros quieres ingresar ?`);
    let resultado = 0;
    let contador = 0;
    while (contador < cantidad) {
        let num = parseInt(prompt(`Ingrese un numero`));
            resultado += num;
            contador += 1;
    }

    alert(resultado);
}

//Ejercicio 4//

let FunctionEjercicio4 = () => {
    let num = 0;
    let resultado = 0;
    do {
        num = parseInt(prompt(`Ingrese sus numeros`));
        resultado += num;
        conf = confirm(`Desea continuar ?`)
    } while (conf == true);
    alert(resultado);
}

//Ejercicio 5//

let FunctionEjercicio5 = () => {
    let num = 0;
    let resultado = 0;
    let contador = 0;
    let promedio = 0;
    do {
        num = parseInt(prompt(`Ingrese sus numeros`));
        resultado += num;
        conf = confirm(`Desea continuar ?`);
        contador += 1;
        promedio = resultado / contador ;
    } while (conf == true);
alert(promedio);
}

//Ejercicio 6//

let FunctionEjercicio6 = () => {
    let UserNumber = parseInt(prompt(`Ingrese un numero`));
    for(i = 1; i <= UserNumber; i++){
        console.log(i);
    }

}

//Ejercicio 7//

let FunctionEjercicio7 = () => {
    let firstNumber = parseInt(prompt(`Ingrese un numero`));
    let secondNumber = parseInt(prompt(`Ingrese el segundo numero`));

    for (num = firstNumber + 1; num < secondNumber; num++){
        console.log(num);
    }

}

//Ejercicio 8//

let FunctionEjercicio8 = () => {
    let userAmountNumber = prompt(`Cuantos numeros quiere ingresar ?`);
    let con = 0;
    let mayNumber = 1;
    do {
        number = parseInt(prompt(`Ingrese sus numeros`));
        con += 1;
        if (mayNumber < number) {
            mayNumber = number;
        }
        console.log(number);
    } while (con < userAmountNumber);
    console.log(mayNumber);
}



//Ejercicio 9//

let FunctionEjercicio9 = () => {
    let userAmountNumber = prompt(`Cuantos numeros quiere ingresar ?`);
    let con = 1; 
    let menNumber = parseInt(prompt(`Ingrese su numero`));
    do {
        number = parseInt(prompt(`Ingrese sus numeros`));
        con += 1;
        if (menNumber > number) {
            menNumber = number;
        }
        console.log(number);
    } while (con < userAmountNumber);
    console.log(menNumber);
}

//Ejercicio 10//

let FunctionEjercicio10 = () => {
    let quan = prompt(`Ingrese un numero`);
    let text = "";
    for (i = 0; i < quan; i++){
        text += "*";
    }
    console.log(text);
}
FunctionEjercicio10()