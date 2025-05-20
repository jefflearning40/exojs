// 1. Tableau de base
let grimoire = ["bave de crapaud", "plume de phénix", "racine de mandragore"];

// 2. Fonction pour ajouter un ingrédient
function ajouterIngredient() {
  let ingredient = prompt("Quel ingrédient veux-tu ajouter au grimoire ?");
  if (ingredient && ingredient.trim() !== "") {
    grimoire.push(ingredient.trim());
    afficherGrimoire();
  } else {
    alert("Aucun ingrédient ajouté.");
  }
}

// 3. Fonction pour afficher la liste
function afficherGrimoire() {
  let html = "<h2>Ingrédients actuels :</h2>";
  html += "<ul>";
  grimoire.forEach(function(i) {
    html += "<li>" + i + "</li>";
  });
  html += "</ul>";
  document.getElementById("liste").innerHTML = html;
}

// 4. Fonction d’analyse
function analyserPotion() {
  let nb = grimoire.length;

  let totalLettres = grimoire.reduce(function(acc, item) {
    return acc + item.length;
  }, 0);

  alert("Analyse de la potion :\n" +
    "Nombre d’ingrédients : " + nb + "\n" +
    "Total de lettres utilisées : " + totalLettres);
}

// Initialisation de l’affichage
afficherGrimoire();