
const students = [{
  age: 25,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 30,
  examScores: [],
  gender: 'male',
  name: 'juan'
},
{
  age: 29,
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
  age: 21,
  examScores: [],
  gender: 'male',
  name: 'francisco'
},
{
  age: 23,
  examScores: [],
  gender: 'male',
  name: 'carlos'
},
{
  age: 25,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},

{
  age: 30,
  examScores: [],
  gender: 'female',
  name: 'virginia'
},
{
  age: 29,
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
export function showTable() {
  console.table(students);
}
//case2
export function numberStudents() {

  console.log('\n There are', students.length, " students");

}
//case 3

export function nameStudents() {
  const student = students.map(function(allNames) {
    return allNames.name;
  })
  console.log(student);
}

//case 4
export function removeStudent() {
  //Elimina el útimo alumno de la lista
  console.log(students.pop());
}

//case 5
export function studentRandom() {
  const student = students[Math.floor(Math.random() * students.length)];
  //intentar comprender las funciones flechas
  const resultado = students.filter(studen => studen != student);
  console.log(resultado);
}

//case 6
export function onlyGirls() {
  const allNames = students.filter(function(student) {
    return student.gender == 'female';
  });
  console.log(allNames);
}

//case 7
export function perGender() {
  const girls = students.filter(function(student) {
    return student.gender == 'female';
  });
  console.log(girls.length, "Chicas");
  const boys = students.filter(function(student) {
    return student.gender == 'male';
  });
  console.log(boys.length, "Chicos");
}

//case 8
//revisar el ejercicio
export function areGirls() {
  const student = students.map(person => person.gender);
  console.log(student.includes("male"));
}

//case 9
export function calculateAge() {
  const student = students.filter(person => person.age >= 20 && person.age <= 25);
  console.log(student);
}



//me falta el número 10



//case 11
export function youngerAge() {
  const lowest = students.reduce((previous, current) => {
    return current.age < previous.age ? current : previous;
  });
  console.log('lowest', lowest);
  //otra forma de hacerlo
  //const lowest = students.reduce((prev, cur) => (cur.age < prev.age ? cur : prev));
}

//case 12
//repasar la nota media no sé si funciona
export function averageAge() {
  function getAverageAge(students) {
    return students.reduce((prev, user) => prev + user.age, 0) / students.length;
  }

  let c = getAverageAge(students);
  let x = Math.round(c);

  console.log("La edad media de los alumnos es:", x);

}


// case 13
export function averageAgeWoman() {
  const allNames = students.filter(function(student) {
    return student.gender == 'female';
  });
  console.log(allNames);

  function getAverageAge(allNames) {
    return allNames.reduce((prev, user) => prev + user.age, 0) / allNames.length;
  }

  let c = getAverageAge(allNames);
  let x = Math.round(c);

  console.log("La edad media de los alumnas mujeres es:", x);
}

//ME FALTA EL CASE 14

//case 15
export function studentsAlphabetically() {
  const student = students.map(function(allNames) {
    return allNames.name;
  })
  console.log(student.sort());
}

