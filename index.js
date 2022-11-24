/*importamos nuestras funciones*/
import { mostrarTabla, cantidadAlumnos, nameAlumnos, deleteLastAlumno,onlyGirls,cantidadPorGenero } from "./funciones.js";
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
    rl.question("Introduce un número: ", (num) => {
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


/*Creamos un Switch para que el usuario pueda evaluar el caso que quiera seleccionar */
 let numberFromConsole;
  let counter = 0;

 do {
    try {
      console.log('REQUISITOS INDISPENSABLES \n 1- Mostrar en formato de tabla todos los alumnos.\n 2- Mostrar por consola la cantidad de alumnos que hay en clase.\n 3- Mostrar por consola todos los nombres de los alumnos.\n 4- Eliminar el último alumno de la clase.\n 5- Eliminar un alumno aleatoriamente de la clase.\n 6- Mostrar por consola todos los datos de los alumnos que son chicas.\n 7- Mostrar por consola el número de chicos y chicas que hay en la clase\n 8- Mostrar true o false por consola si todos los alumnos de la clase       son chicas.\n 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y    25 años.\n 10- Añadir un alumno nuevo con los siguientes datos:\n 11- Mostrar por consola el nombre de la persona más joven de la clase.\n 12- Mostrar por consola la edad media de todos los alumnos de la clase.\n 13- Mostrar por consola la edad media de las chicas de la clase.\n 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase,           tendremos que calcular una nota de forma aleatoria(número entre       0 y 10) y añadirla a su listado de notas.\n 15- Ordenar el array de alumnos alfabéticamente según su nombre.\n 16- Mostrar por consola el alumno de la clase con las mejores notas.\n 17- Mostrar por consola la nota media más alta de la clase y el nombre      del alumno al que pertenece.\n 18- Añadir un punto extra a cada nota existente de todos los alumnos.       Recordad que la  nota  máxima posible es 10. Si los alumnos aún no     tienen registrada ninguna nota, les pondremos un 10.\n');
      counter++;
      numberFromConsole = await getNumberFromConsole();
      
      
    } catch (error) {
      console.log(error);
      process.exit(0);
    }


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
    deleteLastAlumno();
    break;

  case 5:
    
    console.log("Número 3 en una cadena");
    break;

  case 6:
    onlyGirls();
    break;

  case 7:
    cantidadPorGenero();
    break;

  case "8":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "9":
    numberFromConsole == 2;
    console.log("Número 3 en una cadena");
    break;
  case "10":
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
}
   } while (numberFromConsole !== 0 );
    rl.close();


