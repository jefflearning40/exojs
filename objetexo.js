// -----creation de l'objet utilisateur----------------
/*
let utilisateur={
    prenom:"Lucien",
    age:45,
    ville:"Tartas"
};
console.log(utilisateur.prenom);
console.log(utilisateur.age);
console.log(utilisateur.ville);
// modification d'une propriete-----------
utilisateur.ville = "Dax";
utilisateur.age++;

console.log(utilisateur.prenom);
console.log(utilisateur.age);
console.log(utilisateur.ville);
// creation d'une propriete ----------------------------

let utilisateur={
    prenom:"Lucien",
    age:46,
    ville:"Tartas"
};
let newkey="student";
utilisateur.newkey=true;
console.log(utilisateur);
//utilsation d'une propriete d'un objet
/*
utilisateur.ville="Tartas";
utilisateur.age--;
let origine="pays";
utilisateur.origine="indien";
console.log(utilisateur);

function afficheInfos(utilisateur){
    console.log("Je m'appelle "+utilisateur.prenom+", l'"+utilisateur.origine+", j'ai "+utilisateur.age+" ans et j'habite "+utilisateur.ville);
}
afficheInfos(utilisateur);
*/

// creation d'un tableau d'objets
let utilisateurs = [
    {
        prenom: "Lucien",
        age: 45,
        ville: "Tartas"
    },
    {
        prenom: "Dominique",
        age: 35,
        ville: "Morcenx"
    },
    {
        prenom: "Sylvie",
        age: 30,
        ville: "Dax"
    }
];



for (let utilisateur of utilisateurs) {
    console.log(utilisateur.prenom);
    console.log(utilisateur.age);
    console.log(utilisateur.ville);

}
//------------------Bibliothèque-----------------------------------
const bibliotheque = [
    {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        anneePublication: 1943,
        estDisponible: true
    },
    {
        titre: "1984",
        auteur: "George Orwell",
        anneePublication: 1949,
        estDisponible: false
    },
    {
        titre: "L'Étranger",
        auteur: "Albert Camus",
        anneePublication: 1942,
        estDisponible: true
    },
    {
        titre: "Cent ans de solitude",
        auteur: "Gabriel García Márquez",
        anneePublication: 1967,
        estDisponible: false
    }
];

// Affichage de la liste de tous les titres de livres disponibles
console.log("Livres disponibles :");
for (let livre of bibliotheque) {
    if (livre.estDisponible) {
        console.log(livre.titre);
    }
}

// Fonction pour emprunter un livre
function emprunterLivre(titre) {
    for (let livre of bibliotheque) {
        if (livre.titre.toLowerCase() === titre.toLowerCase()) {
            if (livre.estDisponible) {
                livre.estDisponible = false;
                console.log("Livre emprunté avec succès.");
            } else {
                console.log("Ce livre n'est pas disponible.");
            }
            return;
        }
    }
    console.log("Livre non trouvé dans la bibliothèque.");
}

// Fonction pour rendre un livre
function rendreLivre(titre) {
    for (let livre of bibliotheque) {
        if (livre.titre.toLowerCase() === titre.toLowerCase()) {
            livre.estDisponible = true;
            console.log("Merci pour le retour du livre.");
            return;
        }
    }
    console.log("Livre non trouvé dans la bibliothèque.");
}

// Exemple d'utilisation des fonctions
emprunterLivre("Le Petit Prince"); // Livre emprunté avec succès.
rendreLivre("Le Petit Prince");    // Merci pour le retour du livre.
emprunterLivre("1984");            // Ce livre n'est pas disponible.
emprunterLivre("L'Étranger");
rendreLivre("L'Étranger");