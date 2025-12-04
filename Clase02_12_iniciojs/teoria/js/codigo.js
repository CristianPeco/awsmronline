/*
//1. Forma: en cosola (console.log())

console.log("Hola mundo");

//2. Forma: alert(mensaje);

alert("Hola mundo");

//3. Forma: document.write (Hola mundo);

document.writeln("Hola mundo")
*/

/* 2. APRENDER A HACER VARIABLES */

//let + nombre de variable -> Variable
//const + nombre de la constante -> Constante

/*const nombre = 'Cristian';
let edad = 99;
let aprobado = true;*/

/* 3. ¿QUE PUEDO GUARDAR EN ESAS VARIABLES? 
- Texto
- Números
- Boolean: true/false
- Null (valor vacío)
- Undefiend (sin valor)
- Lista de datos ["Pepe","Ana","Vero","Silvia"]
- Lista de objetos
*/

/* 4. OPERADORES ARITMÉTICOS
+ -> Sumar
- -> Restar
* -> Multiplicar
/ -> Dividir
% -> Resto de una división

2%2 = 0

4.2 OPERADORES DE COMPARACIÓN

5 == '5' //true. compara valor 
5 === '5'//false. compara valor y tipo

> -> 5>2 -> true
< -> 5<2 -> false
<= -> 3<=3 -> true
>= -> 10>=9 -> true
!= -> 10!=9 -> true

4.3 OPERADOLES LÓGICOS
&& -> y 5>2 && 1>2 -> False
|| -> o 5>2 || 1>2 - True
*/


/*5. CONDICIONES
5.1 IF/ELSE*/
/*
let edad = 70;

if (edad < 18){
    console.log("Menor");
}else if(edad < 65){
    console.log("Adulto");
}else{
    console.log("Jubilado");
}*/

//5.2 SWICH

let dia = 4;

switch(dia){
    case 1: // dia == 1
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Error");
}






