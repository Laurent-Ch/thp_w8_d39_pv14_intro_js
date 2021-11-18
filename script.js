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

// Data exo 5
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


// Data exo 6.
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Exercice 6 question 1.
function check_rented(books) {
  rented = true;
  books.forEach(book => {
    if (book.rented == 0) {
      rented = false;
    } 
  })
return rented;
}

let exo6_1Btn = document.querySelector('.script-6-1');
exo6_1Btn.addEventListener('click', e => {
  check_rented(books) ? console.log("Tous les livres ont déjà été empruntés une fois.") : console.log("Au moins un livre n'a pas encore été emprunté.")
})

// Exercice 6 question 2.
function check_min(books) {
  let min = books[0].rented;
  let minTitle;
  books.forEach(book => {
    if (book.rented < min) {
      min = book.rented;
      minTitle = book.title;
    } 
  })
return minTitle;
}

let exo6_2Btn = document.querySelector('.script-6-2');
exo6_2Btn.addEventListener('click', e => {
  console.log(check_min(books));
})


// Exercice 6 question 3.
function check_max(books) {
  let max = 0;
  let maxTitle;
  books.forEach(book => {
    if (book.rented > max) {
      max = book.rented;
      maxTitle = book.title;
    } 
  })
return maxTitle;
}

let exo6_3Btn = document.querySelector('.script-6-3');
exo6_3Btn.addEventListener('click', e => {
  console.log(check_max(books));
})

// Exercice 6 question 4

// function find_by_id(books, id) {
//   let result;
//   books.forEach(book => {
//     if (book.id == id) {
//     result = book.title;
//     } 
//   })
//   return result;
// }

// let id1 = 873495;

// let exo6_4Btn = document.querySelector('.script-6-4');
// exo6_4Btn.addEventListener('click', e => {
//   answer = find_by_id(books, id1);
//   console.log(answer);
// })

let exo6_4Btn = document.querySelector('.script-6-4');
exo6_4Btn.addEventListener('click', e => {
  let match = books.find(book => book.id == 873495);
  console.log(match.title);
})

// Exercice 6 question 5

let exo6_5Btn = document.querySelector('.script-6-5');
exo6_5Btn.addEventListener('click', e => {
  let match = books.find(book => book.id == 133712);
  matchIndex = books.indexOf(match);
  books.splice(matchIndex, 1);
  console.log(books);
})

// Exercice 5 question 6
let exo6_6Btn = document.querySelector('.script-6-6');
exo6_6Btn.addEventListener('click', e => {
  sortedArray = books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  console.log(sortedArray);   
})
 



