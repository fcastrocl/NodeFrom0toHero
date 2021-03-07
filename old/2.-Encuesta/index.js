/* Practicar objetos, crear una encuesta, trivia, scope global puntaje  */

/* Correcto = 0 / Incorrecto 1 */
let correcto = 0;

let encuesta = {
  pregunta1: "Cristóbal es perón: ",
  respuesta1: ["Sí", "No", "Quizás"], //Sí es valida
  pregunta2: "Cuántas vida tiene el gato: ",
  respuesta2: ["2", "3", "7"], // 7 es valido
};

console.log("Favor escoja entre Sí,No ,Quizás");
/* console.log(encuesta.pregunta1); */

userAnswer1 = prompt("Por favor elige tu respuesta: ");

if (encuesta.respuesta1[0] == userAnswer1) {
  console.log("Respuesta correcta (sí).");
  console.log("Favor escoja entre 2,3 ó 7: ");
  userAnswer2 = prompt("Por favor elige tu respuesta: ");
}
if (encuesta.respuesta2[2] == userAnswer2) {
  console.log("Respuesta correcta");
  console.log("Encuesta finalizada");
} else {
  console.log("Respuesta incorrecta");
}

encuesta.forEach(element => {
  console.log(element.id);
});

const Ebooks = [{ id: "1" }, { id: "2" }, { id: "3" }];

Ebooks.forEach(element => {
  console.log(element.id);
});

const person = {
  name: "Fernando",
  apellido: "Castro",
  completeName() {
    return person.name + " " + person.apellido;
  },
};

/* Trivia utilizando switch */

let puntaje = 0;

q1 = prompt("Cuántos días tiene la semana:");
console.log(q1);

switch (q1) {
  case "7":
    puntaje++;
    console.log("Respuesta correcta");
    break;

  default:
    puntaje--;
    console.log("Respuesta incorrecta.");
    break;
}

console.log("Puntaje final", puntaje);
