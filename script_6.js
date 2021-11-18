// Exercice 7
function arnToAdn(snippet) {
  let formattedArray = []
  let translatedArray = [];

  tmp = snippet
  for (let i = 0; i < (snippet.length / 3); i++) {
    formattedArray[i] = [tmp[0], tmp[1], tmp[2]].join('');
    tmp = tmp.slice(3);
  }

  let codon;
  for (let i = 0; i < formattedArray.length; i++) {
    let j = formattedArray[i];
    
    switch(j) {
    case "UCU": 
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
        codon = "Sérine";
        break;
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
        codon = "Proline";
        break;
    case "UUA":
    case "UUG": 
        codon = "Leucine";
        break;
    case "UUU":
    case "UUC":
        codon = "Phénylalanine";
        break;
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
        codon = "Arginine";
        break;
    case "UAU":
    case "UAC":
        codon = "Tyrosine";
        break;
    default: 
          codon = "undefined";
          break;
    }
  translatedArray[i] = codon;
  }
  return translatedArray.join('-');
}

let snippet1 = "CCGUCGUUGCGCUACAGC";
let snippet2 = "CCUCGCCGGUACUUCUCG";

let exo6Btn = document.querySelector('.script-7');
exo6Btn.addEventListener('click', e => {
  console.log(`Le fragment d'ARN ${snippet1} correspond à la protéine ${arnToAdn(snippet1)}.`);
  console.log(`Le fragment d'ARN ${snippet2} correspond à la protéine ${arnToAdn(snippet2)}.`);
})

