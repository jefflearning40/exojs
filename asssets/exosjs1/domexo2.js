
function ajouterObjet() {
    //appel des variables
    let campement = document.getElementById("camp");
    let sacados = document.getElementById("sac");

       // recuperer les valeur de objetselect
    let selectId = document.getElementById('objetSelect');
        let objet = selectId.value;

    // Creation de la boite
    let boite = document.createElement("div");
    boite.innerText = objet;

    // Creation  bouton supprimer
    let btn_supprimer = document.createElement("button");
    btn_supprimer.innerText = "supprimer";
    btn_supprimer.onclick = function () {
        boite.remove();
    };

    // Creation bouton deplacer
    let btn_deplacer = document.createElement("button");
    btn_deplacer.innerText = "deplacer";
    btn_deplacer.onclick = function () {
        // pour revenir dans le sac a dos si on est dans le campement
        if (boite.parentElement === sacados) {
            campement.appendChild(boite);
        } else {
            sacados.appendChild(boite);
        }
    };

    // ajout des bouton dans la boite
    boite.appendChild(btn_supprimer);
    boite.appendChild(btn_deplacer);

    // ajouter boite dans la zone sacados
    sacados.appendChild(boite);
}