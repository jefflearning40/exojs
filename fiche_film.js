// Creation de l'objet film
let film = {
  titre: "Inception",
  realisateur: "Christopher Nolan",
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
      <li>${film.realisateur}</li>
      <li>${film.annee}</li>
      <li>${film.duree}</li>
      <li>${aTuVu} </li>
      <li>${film.note}</li>

      </ul>`;
      console.log(film.realisateur);
      console.log(film.annee);
      console.log(film.duree);
      console.log(aTuVu);
      console.log(film.note);
    } else if (aTuVu === "non") {
      
      console.log("Tu n'as pas encore vu ce film.");
      document.querySelector('#resultat').innerHTML = `
      <h2>${film.titre}</h2>
      <ul>
        <li>${film.realisateur}</li>
        <li>${film.annee}</li>
        <li>${film.duree}</li>
        <li>${film.vu} ?</li>
      </ul>`;
    } else {
      aTuVu = ""; 
    }
  }
  
  ;  
  }


vufilm(aTuVu);
