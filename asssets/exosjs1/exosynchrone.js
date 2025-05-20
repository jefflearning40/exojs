//--------------------------------------------------------
// function attendreEtDireBonjour(nom, callback) {
//   setTimeout(function() {
//     callback(nom);
//   }, 2000);
// }

// attendreEtDireBonjour("Angélique", function(prenom) {
//   console.log("Bonjour après 2s, " + prenom);
// });
//----------------------------------------------------------
//
// function attendreEtDireBonjour(nom,callback){
// setTimeout(function(){
//   callback(nom);
// },2000);
// }
// attendreEtDireBonjour("Angelique",function(prenom){
//   console.log("Bonjour apres 2s, "+prenom);
// });
// defi 1
// function afficherApresTroisSecondes(){
//     setTimeOut=3000;
//     log.console("message affiché apres 3 secondes");
// }
// afficherApresTroisSecondes();
// function afficherApresTroisSecondes() {
//     setTimeout(function() {
//         console.log("message affiché après 3 secondes");
//     }, 3000);
// }

// afficherApresTroisSecondes();

//defi 2
// function afficherApresSeconde(){
// setTimeout(function(){
//     console.log("message 1");},1000);
// setTimeout(function(){
//     console.log("message 3");},3000);
// }
// function afficherApresSeconde() {
//     setTimeout(function() {
//         console.log("message 1");
//     }, 1000);

//     setTimeout(function() {
//         console.log("message 3");
//     }, 3000);
// }

// // Appeler la fonction pour exécuter les timeouts
// afficherApresSeconde();
// //defi 3
// document.getElementById("btnCharger").addEventListener("click", function() {
//   document.getElementById("contenu").textContent = "Chargement en cours...";

//   setTimeout(function() {
//     document.getElementById("contenu").textContent = "Contenu chargé ";
//   }, 2000);
// });
//defi 4
let counter = 0;
let temps = null;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const rstButton = document.getElementById("rst");

const counterElement = document.getElementById("display");

startButton.addEventListener("click", () => {
  temps = setInterval(() => {
    counter++;
    counterElement.textContent = counter;
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(temps);
});

rstButton.addEventListener("click", () => {
  clearInterval(temps); 
  counter = 0; 
  counterElement.textContent = counter;
});