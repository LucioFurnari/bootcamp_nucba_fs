
///////
function Ejercicio1(edad) {
    if (edad >= 18){
        console.log(`Soy mayor de edad`);
        if (edad >= 18 && edad <= 25) {
            console.log(`Y tengo menos de 25`);
        }else if ( edad > 25) {
            console.log(`Y tengo mas de 25`);
        }
    }else {
        console.log(`Soy menor de edad`);
    }

}

Ejercicio1(18);