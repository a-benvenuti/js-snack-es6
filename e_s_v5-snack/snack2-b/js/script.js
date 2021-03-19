//--------------------- LE FUNZIONI-----------------------------
// restituisce un numero random tra due estremi compresi
function random(min, max){
  var numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}
//--------------------fine DELLE FUNZIONI------------------------
var teams = [
 {
   nome: "arsenal",
   ptFatti: 0,
   falliSub: 0,
 },
 {
   nome: "new castle",
   ptFatti: 0,
   falliSub: 0,
 },
 {
   nome: "leeds",
   ptFatti: 0,
   falliSub: 0,
 },
];
for (var i = 0; i < teams.length; i++) {
  teams[i].ptFatti = random(1, 114);
  teams[i].falliSub = random(1, 40);
}


var statistiche = [];
for (var i = 0; i < teams.length; i++) {
  statistiche.push({
   nome:teams[i].nome,
   falliSub: teams[i].falliSub,
 });
}

console.log(statistiche);
