let prixburgers = 5;
let suppmenu = 3;
let prenom = prompt("prenom :");
let nombreBurgers = parseInt(prompt("nombre de burgers :"));

if (isNaN(nombreBurgers)) {
    alert("erreur nombre");
} else {
    let veutmenu = confirm("menu oui/non");
    let prix;

    if (veutmenu) {
        prix = (prixburgers + suppmenu) * nombreBurgers;
    } else {
        prix = prixburgers * nombreBurgers;
    }

    alert(`Merci ${prenom} ! Ta commande de ${nombreBurgers} burgers coûte ${prix} euros`);
}