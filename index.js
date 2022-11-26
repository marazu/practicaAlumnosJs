/*importamos nuestras funciones*/

import { mostrarTabla, cantidadAlumnos, nameAlumnos, onlyGirls,removeAlumno, cantidadPorGenero, alumnRandom, sonChicas, entreEdades } from "./funciones.js";
import {message} from "./text.js";
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
    rl.question(" Introduce un número: ", (num) => {
      rl.pause();
      if (isInt(num)) {
        num = Number.parseInt(num);
        resolve(num);
      } else {
        reject("Has de introducir un número");
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
  mostrarTabla()
    break;

  case 2:
    cantidadAlumnos();
    break;

  case 3:
    nameAlumnos();
    break;

  case 4:
    removeAlumno();
    break;

  case 5:
   alumnRandom();
    break;

  case 6:
    onlyGirls();
    break;

  case 7:
    cantidadPorGenero();
    break;

  case 8:
    sonChicas();
    break;
    
  case 9:
    entreEdades();
    break;
    
  case 10:
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "11":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "12":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "13":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "14":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "15":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "16":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "17":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "18":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;


  default:

   rl.close();
    console.log("El programa ha terminado".close);
}/*Evalumamos la condición del while */
   } while (numberFromConsole !== 0 );
     


    


