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
