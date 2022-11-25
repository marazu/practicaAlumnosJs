
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
//case 1
export function mostrarTabla() {
    console.table(students);
  }
 //case2
export function cantidadAlumnos() {
 
console.log('\n Hay',students.length, "Alumnos en clase");
    
  }
//case 3
export  function nameAlumnos() {
  const allNames= students.map(function(student) {
    return student.name;
  
});
    console.log(allNames);
}

//case 4
export function removeAlumno(){
  const allNames= students.map(function(student) {
    return student.name;
    });
  allNames.pop();
  console.log(allNames);
}

//case 5
export function alumnRandom() { 
  let allNames= students.filter(function(student) {
      let randomElem = students[Math.floor(Math.random() * students.length)];
    return student;
  });
  allNames.pop();
console.log(allNames);

}
//case 6
export function onlyGirls(){
  const allNames= students.filter(function(student) {
    return student.gender=='female';
  });
  console.log(allNames);
}
  
//case 7
export function cantidadPorGenero() {
 const girls = students.filter(function(student) {
    return  student.gender=='female';
  
  });
  console.log(girls.length, "Chicas");

  const boys = students.filter(function(student) {
    return  student.gender=='male';
  
  });
  console.log(boys.length,"Chicos");
}

//case 8
export function sonChicas(){
  if (students.gender=='female'){
    return true;   
    console.log("True");
  }
  else if (students !='female'){
    return false;
    console.log("False");
  }
}
//case 9
export function entreEdades (){
  const allNames= students.map(function(student) {
    
    return student.name;
  
});
    console.log(allNames);
}


  

