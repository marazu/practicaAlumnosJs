
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

function nothig() {
  students.length == 0;
  console.log("There are not students");
}

function getRandomArbitrary(min, max) {
  let num = Math.random() * (max - min) + min;
  let y = Math.trunc(num);
  return y;
}


//case 1
export function showTable() {
  console.log('\n');
  console.table(students);
}

//case2
export function numberStudents() {
  console.log('\n', students.length);
}

//case 3
export function nameStudents() {
  const student = students.map(function(name) {
    return name.name;
  });
    console.log(student);
}

//case 4
export function removeStudent() {
  console.log("\n Eliminando el último elemento de la lista: ", students.pop());
  showTable();
}

//case 5
export function studentRandom() {
  if (students != null && students.length > 0) {
    const indexRandom = (Math.random() * (students.length - 1));
    const resultado = students.splice(indexRandom, 1);
      showTable(resultado);
   }
  else {
    nothig();
  }
}

//case 6
export function onlyGirls() {
  const allNamesGirls = students.filter(function(student) {
    return student.gender == 'female';
  });
  console.log(allNamesGirls);
}

//case 7
export function perGender() {
  console.log('\n')
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
export function areGirls() {
  const boys = students.filter(function(student) {
    return student.gender == 'male';
  });
  if (boys.length >= 1) {
    console.log("False");
  } else {
    console.log("True");
  }  
}

//case 9
export function calculateAge() {
  const student = students.filter(person => person.age >= 20 && person.age <= 25);
  console.log(student);
}

//case 10
export function newStudent(){
  let nameRandom;
  let genderRandom;
  let ageRandom = getRandomArbitrary(20 , 50);
  let indexRandomGender= getRandomArbitrary(0,1);

  if (availableGenders[indexRandomGender] == 'female'){
    genderRandom = 'female';
    let indexRandomNamesFemale = getRandomArbitrary(0,availableFemaleNames.length -1);
    nameRandom = availableFemaleNames[indexRandomNamesFemale];
  }else{
    genderRandom= 'male';
    let indexRandomNamesMale = getRandomArbitrary(0,availableMaleNames.length -1);
    nameRandom = availableMaleNames[indexRandomNamesMale];
  }
  students.push({age: ageRandom, examScores: [], gender: genderRandom, name: nameRandom});

  console.log("Student add");
  
  showTable(students);  
}



//case 11
export function getAverageAge(students) {
  return students.reduce((prev, user) => prev + user.age, 0) / students.length;
}
export function youngerAge() {
  const student = students.reduce((previous, current) => {
    return current.age < previous.age ? current : previous;
  });
  console.log('lowest', student);
}

//case 12
export function averageAge() {
  let c = getAverageAge(students);
  let x = Math.round(c);

  console.log("La edad media de los alumnos es:", x);
}


// case 13
export function averageAgeWoman() {
  const girls = students.filter(function(student) {
    return student.gender == 'female';
  });
  let c = getAverageAge(girls);
  let x = Math.round(c);
  console.log("La edad media de las alumnas  es:", x);
}


//case 14
export function addNotes(){
students.forEach(student => student.examScores.push(getRandomArbitrary(0, 10))); 
        
  console.table(students)        
}

//case 15
export function studentsAlphabetically() {
  let student = students.sort( (a, b) => (a.name > b.name) ? 1 : -1);
  console.table(student);
}

//case 16
function mostrarMejorAlumno(){
  
      //Llamamos al método que nos devolverá un objeto con la nota media del mejor alumno y su indice
      let notes= getMejorNotaeIndiceAlumno();
      //Si la mejor nota tiene un -1 como valor es que aun no se ha introducido ninguna nota
      if(datosMejorAlumno.mejorNota == -1){
          console.log('Aún no se ha introducido ninguna nota a ningún alumno');
      }else{
          //Accedemos al mejor alumno e imprimimos sus datos
          let mejorAlumno = students[notes.index];
          console.log('El alumno con las mejores notas (mejor media) és:');
          console.log(mejorAlumno);
      }
  }
}