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
