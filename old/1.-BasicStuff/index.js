let edad = 22;

console.log(edad);

let integrantes = ["mamá","papá","hijo","hija",calcular=(a,b)=>a+b]

let result = integrantes[4](1,2)

console.log(integrantes)

console.log(result)

const person = {
    name: "Fernando",
    apellido: "Castro",
    completeName(){return person.name + " " +  person.apellido}
 }

console.log(person.name)


console.log(person.completeName())

for (let index = 0; index < integrantes.length; index++) {
     const element = integrantes[index];

     console.log(element)
     
}

integrantes.forEach(element => {

    console.log(element)
     
 });


 // let hola = prompt(); --> popout de texto para ingresar data

// Calculadora //

/* let calculadora = {

    valor1: 0,
    valor2: 0,
    suma(){return calculadora.valor1 + calculadora.valor2},
    resta(){return calculadora.valor1 - calculadora.valor2},
    division(){return calculadora.valor1 / calculadora.valor2},
    mult(){return calculadora.valor1 * calculadora.valor2},
} */

let calculadora = {
    suma(a,b){return parseInt(a) + parseInt(b)},
    resta(a,b){return parseInt(a) - parseInt(b)},
    division(a,b){return parseInt(a) / parseInt(b)},
    mult(a,b){return parseInt(a) * parseInt(b)},
}

/* alert shows popout as answer */ 
/* let calculadora = {
    suma(a,b){alert( parseInt(a) + parseInt(b))},
    resta(a,b){alert( parseInt(a) - parseInt(b))},
    division(a,b){alert( parseInt(a) / parseInt(b))},
    mult(a,b){alert( parseInt(a) * parseInt(b))},
} */


/* Array de objetos  */

const Ebooks = [{id:"1"},{id:"2"},{id:"3"}]

Ebooks.forEach(element => {
    
    console.log(element.id)   
});




/* Practicar objetos, crear una encuesta, trivia, scope global puntaje  */


let encuensta = [

    
]