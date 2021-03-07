let ingredientes = [
  "Pepperoini",
  "Champiñiones",
  "Anchoas",
  "Salchicha",
  "Corazones de alcachofa",
];

console.log("Cuál es tu ingrediente de pizza favorito: ");
/* alert("Cuál es tu ingrediente de pizza favorito: "); */




ingredientes.forEach(element => {
  alert(element.valueOf());
  console.log(element.valueOf());
});

let input = prompt("Ingrese su ingrediente: "); 


switch (input) {
  case "0":
    input = ingredientes[parseInt(input)];
    break;

  case "1":
    input = ingredientes[parseInt(input)];
    break;

  case "2":
    input = ingredientes[parseInt(input)];
    break;

  case "3":
    input = ingredientes[parseInt(input)];
    break;

  case "4":
    input = ingredientes[parseInt(input)];
    break;

  default:
    input = "Usted escogió un ingrediente incorrecto";
    break;
}

console.log("Usted eligió: " + input);

/* Ejemplo C Diaz  */

let ingredientes = [
  { name: "Pepperoini", id: 1 },
  { name: "Champiñiones", id: 2 },
  { name: "Salchicha", id: 3 },
  { name: "Corazonesdealcachofa", id: 4 },
];
let menumessage = prompt(`marque el numero de la opcion que desea
"Pepperoini":              1
"Champiñiones":            2
"Salchicha":               3
"Corazones de alcachofa":  4

`);
let menu = (menumessage) => {
  if (
    parseInt(menumessage) > 0 &&
    parseInt(menumessage) <= ingredientes.length
  ) {
    alert(
      `retira tu pizza con ` + ingredientes[parseInt(menumessage - 1)].name
    );
  } else {
    menumessage = prompt(`Opción incorrecta ...marque el numero de la opcion que desea
"Pepperoini":              1
"Champiñiones":            2
"Salchicha":               3
"Corazones de alcachofa":  4

`);
    menu(menumessage);
  }
};

menu(menumessage);
