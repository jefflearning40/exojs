
//----------------exo 1 ---------------------------------
/*let animaux=["chien","chat","lapin"];
let couleur=["rouge","vert","bleu"];
console.log(couleur[2]);
animaux.shift();//supprime le premier element de animaux
animaux.unshift("hamster");//insere au debut du tableu un element
console.log(animaux);
//----------exo 2-------------------------------------
animaux.push("perroquet");
console.log(animaux);
animaux.shift();
console.log(animaux);
console.log(animaux.includes("chat"));
console.log(animaux.join(","));
//-----------------------exo 3 -----------------------------
let nombres = [];
for (let i = 1; i < 11; i++) {
    nombres.push(i);
}
console.log(nombres);
console.log(nombres.length);*/
// ------------------------exercice 4---------------------------
let doublon = [];
let single = [];
let double = {};
for (let j = 0; j < 11; j++) {
    let n = Math.floor(Math.random() * 10);
    doublon.push(n);
}
console.log("Tableau initial doublon:", doublon);
for (let a of doublon) {
    if (double[a]) {
        double[a]++;
    } else {
        double[a] = 1;
    }
}
doublon = [];
for (let num in double) {
    if (double[num] === 1) {
        single.push(parseInt(num));
    } else {
        doublon.push(parseInt(num));
    }
}
console.log("Tableau single (uniques):", single);
console.log("Tableau doublon (doublons):", doublon);
//---------------------------------exercice 5 ---------------------
