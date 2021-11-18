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
