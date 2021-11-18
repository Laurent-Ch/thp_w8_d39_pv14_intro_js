// Exercice 1
let exo1Btn = document.querySelector('.script-1');
exo1Btn.addEventListener('click', e => {
  console.log(`Bonjour monde`);
})

// Exercice 2
let exo2Btn = document.querySelector('.script-2');
exo2Btn.addEventListener('click', e => {
  let name = window.prompt("Quel est ton prénom ?");
  console.log(`Bonjour ${name} !`);
})

// Exercice 3
let exo3Btn = document.querySelector('.script-3');
exo3Btn.addEventListener('click', e => {
  let result = 1;
  let number = window.prompt("De quel nombre veux-tu calculer la factorielle ?");
  for (number; number > 0; number--){
  result *= number;
  }
  console.log(`Le résultat est : ${result}`);
})

// Exercice 4
let exo4Btn = document.querySelector('.script-4');
exo4Btn.addEventListener('click', e => {
  let rows = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  for (let i = 1; i <= rows; i++){
    space = " ".repeat(rows - i)
    block = "#".repeat(i);
    console.log(space + block);
  }
})
