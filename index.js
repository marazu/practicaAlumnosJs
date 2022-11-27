/*importamos nuestras funciones*/
import * as myFunction from './funciones.js';
import { message } from "./text.js";
import readline from "readline";

/*configuramos la utilidad de node para que los datos se pidan y se muestren por consola.*/
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isInt(str) {
  /*returns a boolean*/
  return /^[0-9]+$/.test(str);
}

const isInt2 = (str) => {
  const integer = parseInt(str);
  if (Number.isNaN(integer)) {
    return false;
  } else {
    return true;
  }
};

// productor 
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question("Please, enter one of the indicated options: ", (num) => {
      rl.pause();
      if (isInt(num)) {
        num = Number.parseInt(num);
        resolve(num);
      } else {
        reject("Please, You have to enter a number or enter 0 for end");
      }
    });
  });

  return promise;
}


/*Arrancamos un bucle Do While para que el usuario pueda introducir los datos tantas veces como desee o pulsar un 0 u otro número para terminar*/

let numberFromConsole;
let counter = 0;

do {
  try {
    message();
    counter++;
    numberFromConsole = await getNumberFromConsole();


  } catch (error) {

    console.log(error);

    process.exit(0);
  }

  /*Creamos un Switch para que el usuario pueda evaluar el caso que quiera seleccionar */
  switch (numberFromConsole) {
    case 1:
      myFunction.showTable();
      break;

    case 2:
      myFunction.numberStudents();
      break;

    case 3:
      myFunction.nameStudents();
      break;

    case 4:
      myFunction.removeStudent();
      break;

    case 5:
      myFunction.studentRandom();
      break;

    case 6:
      myFunction.onlyGirls();
      break;

    case 7:
      myFunction.perGender();
      break;

    case 8:
      myFunction.areGirls();
      break;

    case 9:
      myFunction.calculateAge();
      break;

    case 10:
      myFunction.newStudent();
      break;

    case 11:
      myFunction.youngerAge();
      break;

    case 12:
      myFunction.averageAge();
      break;

    case 13:
      myFunction.averageAgeWoman();
      break;

    case 14:
      myFunction.addNotes();
      break;

    case 15:
      myFunction.studentsAlphabetically();
      break;

    case 16:
       console.log("Número 3 en una cadena");
      break;

    case 17:
      console.log("Número 3 en una cadena");
      break;

    case 18:
      console.log("Número 3 en una cadena");
      break;

    default:
      console.log("Ha finalizado");
      rl.close();
    
  }
} while (numberFromConsole > 0 && numberFromConsole <= 18);






