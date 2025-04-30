/*//-------exercices 1-------------
for (let i = 0; i < 11; i++) {
	console.log(i+"*5="+ i*5);
	
}
for(let j=1;j<10;j++){
    console.log(j);
}
//-------------------------------
for(let k=1;k<21;k++){
if(k%2==0){
    console.log(k);
}else{
    console.log("");
}
}
//--------------------------------
let l=3
for(l;l<31;l++){
if(l%3===0){
    console.log(l);
}else{
    console.log("");
}
}
//--------------------------------
let n=parseInt(prompt("un nombre :"));

function pairimpair(n){
    if (n%2===0){
        console.log("pair !");
    }else{
        console.log("impair !");
    }
}
pairimpair(n);

//--------------------exercices 2 ---defi 1-------
let m=0;
while(m<21){
    if (m%2===0){
        console.log(m);
    }else{
        console.log("");
    }
    m=m+1;
}
// exercice 2 defi 2
let choice=parseInt(prompt("Table de :"));
function bellepailletes(choice){
for(let t=0;t<11;t++){
    console.log(t+" * "+choice+" = "+t*choice);
}
    bellepayettes(choice);
}/*
//fizz buzz-----------------------------------
for (let fb=0;fb<21;fb++){
    if (fb%3===0){
        console.log(fb+":Fizz");
    }else if
         (fb%5===0){
        console.log(fb+":Buzz");
    }else if
    (fb%3===5 || fb%5===3){
        console.log(fb+"FizzBuzz");
    }else{
        console.log("");
    }
    }*/
   //-------------------------------------------
 /* compter les voyelles
let i = 0;
let j = 0;
let n = 0;
let letter = "";
let phrase = prompt("phrase :");
function comptervoyelle(phrase){
let phrase1 = phrase.toUpperCase();
phrase1 = phrase1.split("");
console.log(phrase1);
let voyelles = ['A','E','É','I','O','U','Y'];

for (letter of phrase1) {
    if (voyelles.includes(letter)) {
        n = n + 1;
    }
}

console.log("nombre de voyelles= " + n);
}
comptervoyelle(phrase);

//---------Pyramide-----------------------
let p = parseInt(prompt("Nombre d'étages :"));

function pyramides(p) {
    for (let i = 1; i <= p; i++) {
        let espaces = ' '.repeat(p - i);
        let etage = '*'.repeat(2 * i - 1); 
        console.log(espaces + etage);
    }
}

pyramides(p);
*/
//----------------------------------------
//---------   Devinette ------------------
//----------------------------------------
let coup=0;
let nombre;
let n=Math.floor(Math.random()*100);
console.log(n);
while(nombre !==n){
nombre=prompt("deviner quel est le nombre entre 0 et 100");
coup=coup+1;
if (nombre<n){
    alert("trop petit :");
}
else if (nombre>n){
    alert("trop grand !");
}
else{
    alert("Bravo, vous avez trouve en "+coup+" coups");
    break;
}

}