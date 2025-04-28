// prix initial
const PRIX_BASE = 10; // en euros

// saisie variables
let nomComplet = prompt("Veuillez entrer votre nom et prénom :");
let age = prompt("Veuillez entrer votre âge :");
let estEtudiant = prompt("Êtes-vous étudiant ? (oui ou non) :").toLowerCase();
let nombreTickets = prompt("Veuillez entrer le nombre de tickets souhaités :");


let erreurDetectee = false;


if (age === "" || isNaN(age)) {
    console.log("Âge invalide");
    erreurDetectee = true;
}

// Vérification nombre de tickets
if (nombreTickets <= 0 || isNaN(nombreTickets)) {
    console.log("Tu dois au moins acheter un ticket !");
    erreurDetectee = true;
}

// Vérification du statut étudiant
if (estEtudiant !== 'oui' && estEtudiant !== 'non') {
    console.log("Réponse invalide pour le statut étudiant. Veuillez répondre par 'oui' ou 'non'.");
    erreurDetectee = true;
}

// si tout est bon
if (!erreurDetectee) {
    
    age = parseInt(age);
    nombreTickets = parseInt(nombreTickets);

    // calcul reduction
    let reductionPrincipale = 0;

    if (age < 12) {
        reductionPrincipale = 0.5; // -50%
    } else if (age > 60) {
        reductionPrincipale = 0.3; // -30%
    } else if (estEtudiant === 'oui') {
        reductionPrincipale = 0.2; // -20%
    }

    // reduction de groupe
    let reductionGroupe = (nombreTickets > 3) ? 0.1 : 0; // -10% 

    //  Calcul du prix final
    let prixTotalSansReduction = PRIX_BASE * nombreTickets;
    let prixApresReductionPrincipale = prixTotalSansReduction * (1 - reductionPrincipale);
    let prixFinal = prixApresReductionPrincipale * (1 - reductionGroupe);
    let premiereLettreNom = nomComplet.split(' ')[1].slice(0, 2); 
    
    alert(`Bonjour ${nomComplet}, ton nom commence par ${premiereLettreNom}, tu as ${age} ans et tu paies ${prixFinal.toFixed(2)} € pour ${nombreTickets} tickets.`);
}


// je pense qu'avec une boucle, on pourrait recommencer la saisie jusqu'a ce que tout soit bon et que quand tout est bon on affiche l'alert.