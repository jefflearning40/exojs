// Creation de l'objet film
let film = {
  titre: "Inception",
  realisateur: "Christopher Nolan",
  duree:"1H48",
  annee: 2010,
  vu: false
};

let aTuVu = "";
let newkey = "note";

function vufilm(aTuVu) {
  while (aTuVu === "") {
    aTuVu = prompt("As tu déjà vu ce film (oui/non): " + film.titre + " ?");
    
    aTuVu = aTuVu.toLowerCase();
    console.log(aTuVu);
    if (aTuVu === "oui") {
      film.vu = true;
      let note = 0;
      while (note < 1 || note > 5 || isNaN(note)) {
        note = Number(prompt("Quelle note donnes-tu à ce film entre 1 et 5 ?:"));
      }
      film[newkey] = note; 
      
      document.querySelector('#resultat').innerHTML = `
      <h2>${film.titre}</h2>
      <ul>
       <li>Réalisateur  :${film.realisateur}</li>
        <li>Sorti en    :${film.annee}</li>
        <li>Durée       :${film.duree}</li>
        <li>Déjà vu     ?${aTuVu}</li>
        <li>Note        :${film.note}</li>

      </ul>`;
      
    } else if (aTuVu === "non") {
      
      console.log("Tu n'as pas encore vu ce film.");
      document.querySelector('#resultat').innerHTML = `
      <h2>${film.titre}</h2>
      <ul>
        <li>Réalisateur :${film.realisateur}</li>
        <li>Sorti en    :${film.annee}</li>
        <li>Durée       :${film.duree}</li>
        <li>Déjà vu     ?${aTuVu}</li>
      </ul>`;
    } else {
      aTuVu = ""; 
    }
  };  
  }


vufilm(aTuVu);
