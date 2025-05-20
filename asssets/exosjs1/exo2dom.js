function ajouterObjet() {
    const select = document.getElementById("objetSelect");
    const selectedValue = select.options[select.selectedIndex].text;
    addBackBag(selectedValue);
}

function addBackBag(objetNom) {
   
    const itemBox = document.createElement("div");
    itemBox.className = "item-box";

    
    const itemName = document.createElement("span");
    itemName.textContent = objetNom;

   
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.onclick = function() {
        supprimer(itemBox);
    };

   
    const moveButton = document.createElement("button");
    moveButton.textContent = "Déplacer";
    moveButton.onclick = function() {
        deplacer(itemBox);
    };

    
    itemBox.appendChild(itemName);
    itemBox.appendChild(deleteButton);
    itemBox.appendChild(moveButton);

    
    document.getElementById("sac").appendChild(itemBox);
}

function supprimer(itemBox) {
   
    itemBox.remove();
}

function deplacer(itemBox) {
    
    const sac = document.getElementById("sac");
    const camp = document.getElementById("camp");

    
    if (sac.contains(itemBox)) {
        camp.appendChild(itemBox);
    } else if (camp.contains(itemBox)) {
        sac.appendChild(itemBox);
    }
}