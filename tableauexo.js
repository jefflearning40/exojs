
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
console.log(nombres.length);
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
//----------------------exercice 5 et 6---------------------
let tableau=['pomme','Banane','Abricot','Cerise'];
function displayArray2(tableau){
tableau.pop();
tableau.push("et cerise");
console.log(tableau.join(","));
}
displayArray2(tableau);
//--------------------exrecice 7-------------------------------
function displayArray3(tab, useAnd) {
	if (tab.length === 0) {
		return '';
	}

	if (tab.length === 1) {
		return tab[0];
	}

	if (useAnd) {
		return tab.slice(0, -1).join(', ') + ' et ' + tab[tab.length - 1];
	} else {
		return tab.join(', '); // Mémo Laurent // et non .join(' ');
	}
}

console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], true));
//----------------------------------exercice 8------------------------------------




let message = prompt("Entrez un message :");
console.log("Message saisi :", message); // Ajoutez cette ligne pour vérifier l'entrée

function sortWordsInString(chaine, desc = true) {
    if (chaine.trim() === '') {
        return '';
    }

    let mots = chaine.split(' ').map(mot => mot.toLowerCase());

    mots.sort();

    if (!desc) {
        mots.reverse();
    }

    return mots.join(' ');
}

console.log(sortWordsInString(message));
*/

// ----------------------------exercice 9 -------------------------------------------------
let nombres = [1, 2, 3, 4, 5, 6, 7, 8];
let resultat = nombres.filter((x) => x % 2 === 0).map((x) => x * 2);
console.log(resultat);
// exercice 10---------------------------------------------------------------------------
function roundDownArray(tab) {
	return tab.map((num) => Math.floor(num));
}
console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]));
// exercice 11------------------------------------------------------------------------------------------
function sumOfArray(tab) {
	return tab.map((x) => Math.floor(x)).reduce((a, b) => a + b, 0);
}
console.log(sumOfArray([3.7, 8.4, 2.1, 5.9]));
//exercice 12-------------------------------------------------------------------------------------------
function averageOfArray(tab) {
    const arrondis = tab.map((x) => Math.floor(x));
    const sum = arrondis.reduce((a, b) => a + b, 0);
    return sum / arrondis.length;
  }
  console.log(averageOfArray([3.7, 8.4, 2.1, 5.9]));