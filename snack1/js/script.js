/* ECMASCRIPT 5
var bici = [
  {
    marca: 'graziella',
    pesoKg: 4,
  },
  {
    marca: 'bianchi',
    pesoKg: 2,
  },
  {
    marca: 'atala',
    pesoKg: 3,
  },
];

var biciLeggera = bici[0];

for (var i = 0; i < bici.length; i++) {
  if (bici[i].pesoKg < biciLeggera.pesoKg){
    biciLeggera = bici[i];
  }
}

var stampaBiciLeggera = document.getElementById('stamp');
stampaBiciLeggera.innerHTML = "la bici più leggera è la: " +  biciLeggera.marca + " con un peso di: " + biciLeggera.pesoKg + "Kg";
*/
// --------------------------------------------------------------------------------------------------------------------------------
/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
