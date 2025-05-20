// initialisation des variables
let nom="";
let age=NUL;
let poids=NUL;
let membreLegendaire=true;
let membreHonneur=true;
let membreApprouvé=true;

// saisie des données
while(!nom || nom.trim() === ""){
    nom=prompt("nom du chat :");
}
while(age<1){
    age=prompt("age du chat :");  
}
while(poid<1){
    poids=prompt("poid du chat :");
}
 

 console.log(verifLegendaire(age,poids));
 console.log(verifHonneur(age,poids));
 console.log(verifApprouve(age,poids));
 
 
 // verifier membre legendaire

function verifLegendaire(age,poids){
if (age>15 || poids>10){
     return MembreLegendaire=true;
}else{
     return MembreLegendaire=false;
}
}

//verifier membre d'honneur

function verifHonneur(age,poids){
if (age>=10 && age<=15 && poids>6 && poids<=10){
     membreHonneur=true;
}else{
    membreHonneur=false;
}
}

//verifier membre approuvé

function verifApprouve(age,poids){
if (age>=3 && age<10 && poids>=3 && poids<=6){
    membreApprouvé=true;
}else{
    membreApprouvé="Refusé!"
}
}
