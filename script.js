// Exercice 1.
let exo1Btn = document.querySelector('.script-1');
exo1Btn.addEventListener('click', e => {
  console.log(`Bonjour monde`);
})

// Exercice 2.
let exo2Btn = document.querySelector('.script-2');
exo2Btn.addEventListener('click', e => {
  let name = window.prompt("Quel est ton prénom ?");
  console.log(`Bonjour ${name} !`);
})

// Exercice 3.
let exo3Btn = document.querySelector('.script-3');
exo3Btn.addEventListener('click', e => {
  let result = 1;
  let number = window.prompt("De quel nombre veux-tu calculer la factorielle ?");
  for (number; number > 0; number--){
  result *= number;
  }
  console.log(`Le résultat est : ${result}`);
})

// Exercice 4.
let exo4Btn = document.querySelector('.script-4');
exo4Btn.addEventListener('click', e => {
  let rows = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  for (let i = 1; i <= rows; i++){
    space = " ".repeat(rows - i)
    block = "#".repeat(i);
    console.log(space + block);
  }
})

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Exercice 5 question 1.
let exo5_1Btn = document.querySelector('.script-5-1');
exo5_1Btn.addEventListener('click', e => {
  entrepreneurs.forEach(entrepeneur => {
    // console.log(`test`);
    if (entrepeneur.year >= 1970 && entrepeneur.year < 1980) {
      console.log(`${entrepeneur.first} ${entrepeneur.last}, ${entrepeneur.year}`);
    }
  })
})

// Exercice 5 question 2.
let exo5_2Btn = document.querySelector('.script-5-2');
exo5_2Btn.addEventListener('click', e => {
  entrepreneurs.forEach(entrepeneur => {
      console.log(`${entrepeneur.first} ${entrepeneur.last}`);
  })
})

// Exercice 5 question 3.
const currentYear = 2021

let exo5_3Btn = document.querySelector('.script-5-3');
exo5_3Btn.addEventListener('click', e => {
  entrepreneurs.forEach(entrepeneur => {
      let entrepreneurCurrentAge = currentYear - entrepeneur.year;
      console.log(`${entrepeneur.first} ${entrepeneur.last} a/aurait ${entrepreneurCurrentAge} ans en 2021.`)
  })
})

// Exercice 5 question 4.
let exo5_4Btn = document.querySelector('.script-5-4');
exo5_4Btn.addEventListener('click', e => {
  sortedArray = entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0))
  console.log(sortedArray);      
  })