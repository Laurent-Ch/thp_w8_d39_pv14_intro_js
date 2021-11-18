let exo7Btn = document.querySelector('.script-8');
let exo7Input = document.querySelector('.teenage-bot-input');

function chat() {
  console.log(`Votre message : ${exo7Input.value}`)
  
  if (exo7Input.value.slice(-1) === "?") {
    console.log("Teenage-bot : Ouais Ouais...");
  } 
  else if (exo7Input.value != "" && exo7Input.value === exo7Input.value.toUpperCase()) {
    console.log("Teenage-bot : Pwa, calme-toi...");
  }
  else if (exo7Input.value.toUpperCase().includes("FORTNITE")) {
    console.log("Teenage-bot : On s' fait une partie soum-soum ?");
  }
  else if (exo7Input.value === "") {
    console.log("Teenage-bot : T'es en PLS ?");
  }
  else {
    console.log("Teenage-bot : Balek.");
  }
  exo7Input.value = "";
}

exo7Btn.addEventListener('click', e => {
  chat();
})
exo7Input.addEventListener('keypress', e => {
  e.code == "Enter" ? chat() : null;
})