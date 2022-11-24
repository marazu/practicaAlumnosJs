const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 26,
  examScores: [],
  gender: 'male',
  name: 'juan'
},
{
  age: 30,
  examScores: [],
  gender: 'male',
  name: 'victor'
},
{
  age: 28,
  examScores: [],
  gender: 'male',
  name: 'leo'
},
{
  age: 31,
  examScores: [],
  gender: 'male',
  name: 'francisco'
},
{
  age: 34,
  examScores: [],
  gender: 'male',
  name: 'carlos'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},

{
  age: 45,
  examScores: [],
  gender: 'female',
  name: 'virginia'
},
{
  age: 38,
  examScores: [],
  gender: 'female',
  name: 'isabel'
},
{
  age: 33,
  examScores: [],
  gender: 'female',
  name: 'luisa'
},
{
  age: 35,
  examScores: [],
  gender: 'female',
  name: 'ana'
},
{
  age: 27,
  examScores: [],
  gender: 'female',
  name: 'cecilia'
},
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

/*Mis funciones*/

export function mostrarTabla() {
    console.table(students);
  }
 
export function cantidadAlumnos() {
  let result = availableMaleNames.length +     availableFemaleNames.length;
    console.log(result);
  }

export  function nameAlumnos() {
    console.log(availableFemaleNames + (" ") + availableMaleNames);
  }


export function deleteLastAlumno() {
    availableMaleNames.pop();
    let ultimo = (availableFemaleNames + availableMaleNames);
    console.log(ultimo);
  }

  export function onlyGirls(){
    const soloChicas = students.slice(6, 12);
    console.log(soloChicas);
  }

  export function cantidadPorGenero() {
    let result = availableMaleNames.length;
    let result2 = availableFemaleNames.length;
    console.log("Chicos", result);
    console.log("Chicas", result2);
  }
export function edad(){

  
}
export function message(){
   console.log ("REQUISITOS INDISPENSABLES \n 1- Mostrar en formato de tabla todos los alumnos.\n 2- Mostrar por consola la cantidad de alumnos que hay en clase.\n 3- Mostrar por consola todos los nombres de los alumnos.\n 4- Eliminar el último alumno de la clase.\n 5- Eliminar un alumno aleatoriamente de la clase.\n 6- Mostrar por consola todos los datos de los alumnos que son chicas.\n 7- Mostrar por consola el número de chicos y chicas que hay en la clase\n 8- Mostrar true o false por consola si todos los alumnos de la clase       son chicas.\n 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y    25 años.\n 10- Añadir un alumno nuevo con los siguientes datos:\n 11- Mostrar por consola el nombre de la persona más joven de la clase.\n 12- Mostrar por consola la edad media de todos los alumnos de la clase.\n 13- Mostrar por consola la edad media de las chicas de la clase.\n 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase,           tendremos que calcular una nota de forma aleatoria(número entre       0 y 10) y añadirla a su listado de notas.\n 15- Ordenar el array de alumnos alfabéticamente según su nombre.\n 16- Mostrar por consola el alumno de la clase con las mejores notas.\n 17- Mostrar por consola la nota media más alta de la clase y el nombre      del alumno al que pertenece.\n 18- Añadir un punto extra a cada nota existente de todos los alumnos.       Recordad que la  nota  máxima posible es 10. Si los alumnos aún no     tienen registrada ninguna nota, les pondremos un 10.\n");

     // var porcion = mensaje.substring(5, 5); 
//porcion = mensaje.substring(5, 5); 
}