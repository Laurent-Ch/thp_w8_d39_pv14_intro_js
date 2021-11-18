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
