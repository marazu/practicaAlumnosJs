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
 