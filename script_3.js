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