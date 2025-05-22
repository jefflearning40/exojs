function fetch1(){
    const title = document.createElement("h1");
    title.textContent=" Découvre un personnage de Rick & Morty ! "

    const consigns = document.createElement("p");
    consigns.textContent="Un personnage aléatoire va s'afficher à chaque clic. Multivers garanti";

   const bouton = document.createElement("button");
   bouton.id = "btn-rm";
   bouton.textContent="Afficher un personnage";
   bouton.className ="btn btn-success";

   const afficher = document.createElement("div");
   afficher.id="character";
   afficher.className="mt-3";

   document.body.appendChild(title);
   document.body.appendChild(consigns);
   document.body.appendChild(bouton);
   document.body.appendChild(afficher);

  //initialisation du nombre de personnage
  let totalPersonnages;
// lancer la lecture du nombre total de personnage dans le fetch
  async function initialiserNombreDePersonnages() {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    
    let data = await response.json();
    //le nombre est lu dans data/info/count
    totalPersonnages = data.info.count;
    console.log(totalPersonnages);
  }

  //execute la fonction async 
  initialiserNombreDePersonnages();

  
 
  // declare la zone d'affichage qui est div character dans le dom
  //zone affichage= div afficher en haut

  //ecoute si il y a une action sur le button btn-rm declaré bouton, si il y a un click
  bouton.addEventListener("click", async function () {
   // genere un nombre aleatoire entre 0+1 et le nombre obtenu dans le initialiserNombrePersonnage 
    let id = Math.floor(Math.random() * totalPersonnages) + 1;
//essaye de lire le fichier caracter a l'index id generé aleatoirement
    try {
      
      let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
   
// si la reponse de try  est false, il renvoie une erreur
      if (!response.ok) {
        throw new Error("error reponse");
      }
//sinon data=reponse obtenu par le try c'est a dire le data visible dans la console
      let data = await response.json();
      console.log(data);
//on dispatch les elements de data par nom, espece,le statu et un image
      
      let name = data.name;
      let species = data.species;
      let status = data.status;
      let image = data.image;
      console.log(name);
      console.log(species);
      console.log(status);
      console.log(image);
      //affichage des données récuperées par le try et dispatchés par categorie.La zone affichage est declaree a la ligne 50
      afficher.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>Espèce: ${species}</p>
        <p>Statut: ${status}</p>
      `;
      //Ajoute dans la balise zone affichage 
      // <image src="data.image" alt="description de l'image">  l'image et le nom de l'image
     // creer une div h3 dans laquelle il met le nom de l'image, data.name"
     //puis cree une balise p et dedans , il met le data.species
     // puis une derniere balise p ou il y met le data.status

     // si le try n'a pas reussi a trouvé une connection ou que le lien est 404 alors un catch  renvoie l'erreur
    } catch (error) {
      console.error("Erreur!");
     //cette erreur est injectée dans la balise character dans une balise p crée
      afficher.innerHTML = `<p>Erreur lors de la récupération des données du personnage.</p>`;
    }
  });
   








}
