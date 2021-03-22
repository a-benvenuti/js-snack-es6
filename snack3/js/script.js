/* ECMASCRIPT 5
// -------------------FUNZIONI---------------------
function arrayInterval (array, a, b){
  const arrayNew = [];
  for (let i = a; i <= b && i < array.length; i++) {
    arrayNew.push(array[i]);
  }
  return arrayNew;
}
// -------------fine delle FUNZIONI----------------
const arrayDefault = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//SENZA CONTROLLO SUI DATI (con const)
//const min = parseInt(prompt("Inserisci l'estremo minore"));
//const max = parseInt(prompt("Inserisci l'estremo maggiore"));


//CON CONTROLLO SUI DATI (con let)
let min;
let max;
let appoggio;
do {
  min = parseInt(prompt("Inserisci l'estremo minore"));
} while (isNaN(min) || min < 0);
do {
  max = parseInt(prompt("Inserisci l'estremo maggiore"));
} while (isNaN(max) || max < 0);
if (max < min){
  appoggio = max;
  max = min;
  min = appoggio;
}

console.log(arrayInterval(arrayDefault, min, max));
*/
// --------------------------------------------------------------------------------------------------------------------------------
