/*
//-----------------------demo 1 ------------------------
//function direBonjour(){
//    alert("Bonjour !");
//}
//let bouton=document.getElementById("btnEvent");
//bouton.addEventListener("click",function(){
//    alert("Evenement capturé avec addEventListener !");
//});
document.getElementById("btnEventObject").addEventListener("click",function(event){
    console.log(event);
alert("Regarde dans la console !");
});

let zone = document.getElementById("zoneMultiEvent");

zone.addEventListener("mouseover", function() {
  zone.style.backgroundColor = "yellow";
});

zone.addEventListener("mouseout", function() {
  zone.style.backgroundColor = "lightblue";
});

//exercice 1
function Bravo(){
    alert("Bravo, tu as cliqué sur le bouton");
}

//exercie 2
 document.getElementById('Paragraph').addEventListener('click', function() {
            document.getElementById('Paragraph').style.color = 'red'; 
        });

//exercice3
let button = document.getElementById('bouton');

        button.addEventListener('mouseover', function() {
            button.style.transform = 'scale(1.2)'; 
        });

        button.addEventListener('mouseout', function() {
            button.style.transform = 'scale(1)'; 
        });
 
        exercice 4       

let compteur = 0;
        function compter() {
            compteur++;
            document.getElementById("ajout").textContent = compteur;
        }
exercice 5
        let comptclick = 0;
        const button = document.getElementById('Button');

        button.addEventListener('click', function() {
            comptclick++;
            console.log(`Nombre de clics: ${comptclick}`);

            if (comptclick >= 3) {
                button.disabled = true;
                console.log('Bouton désactivé');
            }
        });

// exerice 6
   document.getElementById('ajoutparagraphe').addEventListener('click', function() {
            const div = document.getElementById('contenu');
            const nouveauParagraphe = document.createElement('p');
            nouveauParagraphe.textContent = 'Nouveau paragraphe ajouté !';
            div.appendChild(nouveauParagraphe);
        });
*/
//exercice 7
document.getElementById('contenu').addEventListener('click', function() {
            const div = document.getElementById('contenu');
            div.remove(); // Supprime la div du DOM
        });