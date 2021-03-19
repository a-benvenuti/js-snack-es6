/* ECMASCRIPT 5
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
*/
/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
//--------------------- LE FUNZIONI-----------------------------
// restituisce un numero random tra due estremi compresi
function random(min, max){
  var numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}
//--------------------fine DELLE FUNZIONI------------------------
const teams = [
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
for (let i = 0; i < teams.length; i++) {
  teams[i].ptFatti = random(1, 114);
  teams[i].falliSub = random(1, 40);
}


const statistiche = [];
for (let i = 0; i < teams.length; i++) {
  const {nome, falliSub} = teams[i];
  statistiche.push({
   nome,
   falliSub,
 });
}

console.log(statistiche);
