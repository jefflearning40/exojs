// demo 1 afficher un bouton afficher dom
function afficherDOM() {
    console.log(document); // Montre l'objet DOM entier dans la console
  }

  // demo 12
function changerTitre() {
    let titre = document.getElementById("titre"); 
    titre.textContent = "Titre modifié !";
  }

  //demo 13
  function changerParagraphes() {
    let paragraphes = document.getElementsByTagName("p");
  
    for (let i = 0; i < paragraphes.length; i++) {
      paragraphes[i].style.color = "red";
      paragraphes[i].textContent = "Texte modifié !";
    }
  }
  // demo 14
  function colorierLi(){
    let listeItems = document.getElementsByTagName("li");
    let tableauItems= Array.from(listeItems);

    tableauItems.forEach(function(item){
        item.style.backgroundColor="yellow";
    })
  }
  // demo 15
  function changerBoites() {
    let boites = document.querySelectorAll(".boite");
  
    boites.forEach(function(boite) {
      boite.style.border = "2px solid blue";
      boite.textContent = "Boîte modifiée";
    });
  }
  // demo 16
  const ul = document.getElementById('maListe');

// Récupération initiale des listes
const htmlCollection = document.getElementsByTagName('li'); // live
const nodeList = document.querySelectorAll('li'); // statique

console.log('Avant ajout :');
console.log('HTMLCollection :', htmlCollection.length);
console.log('NodeList :', nodeList.length);

document.getElementById('ajouter').addEventListener('click', () => {
  const nouveauLi = document.createElement('li');
  nouveauLi.textContent = 'Élément ajouté';
  ul.appendChild(nouveauLi);

  console.log('Après ajout :');
  console.log('HTMLCollection :', htmlCollection.length); // mis à jour
  console.log('NodeList :', nodeList.length);             // ne change pas
});

// demo 21
function creerElement() {
    const nouveauParagraphe = document.createElement("p");
    nouveauParagraphe.textContent = "Je suis un nouveau paragraphe !";
    document.getElementById("zoneCreation").appendChild(nouveauParagraphe);
  }
  //demo 22
  function modifierTexte() {
    document.getElementById("texteModifiable").textContent = "Texte modifié !";
  }
  //demo 23
  function ajouterClasse() {
    document.getElementById("bloc").classList.add("rotate");
  }
  
    // demo 24
    function supprimerElement() {
        const element = document.getElementById("aSupprimer");
        element.remove();}
    
    // demo 25
    function deplacerZone() {
        const zone = document.getElementById("zone1");
        const destination = document.getElementById("zone2");
        destination.appendChild(zone);
      }
// demo 26
function insererAvant() {
    const nouveauItem = document.createElement("li");
    nouveauItem.textContent = "Nouveau avant Item 2";
  
    const itemB = document.getElementById("itemB");
    const liste = document.getElementById("maListe2");
  
    liste.insertBefore(nouveauItem, itemB);
  }