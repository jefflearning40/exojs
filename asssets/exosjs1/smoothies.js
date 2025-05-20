const panier = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue","mayonnaise","moutarde","poire","chocolat","vanille","camembert coulant","whisky","rhum","epinards","tomate","aie","menthe","sel","poivre"];

let compteur = 0;
let nombreFruits = 3;

function validerRecette() {
    const inputNombreFruits = document.getElementById("nombreFruits");
    nombreFruits = parseInt(inputNombreFruits.value) || 3;
}

function preparerSmoothie() {
    const resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = '';

    const smoothie = [];
    const choixfruits = [...panier];

    for (let i = 0; i < nombreFruits; i++) {
        const randomIndex = Math.floor(Math.random() * choixfruits.length);
        smoothie.push(choixfruits[randomIndex]);
        choixfruits.splice(randomIndex, 1);
    }

    smoothie.forEach(fruit => {
        const fruitElement = document.createElement('div');
        fruitElement.textContent = fruit;
        resultatDiv.appendChild(fruitElement);
    });

    if (smoothie.includes("kiwi magique")) {
        resultatDiv.style.backgroundColor = "green";
    } else {
        resultatDiv.style.backgroundColor = "";
    }

    compteur++;
    document.getElementById("compteur").textContent = `Smoothies préparés : ${compteur}`;
}

function boireSmoothie() {
    const resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = '';
    resultatDiv.style.backgroundColor = "";
}

document.getElementById("btnSmoothie").addEventListener("click", preparerSmoothie);
document.getElementById("btnBoire").addEventListener("click", boireSmoothie);
document.getElementById("btnMettreAJour").addEventListener("click", validerRecette);
