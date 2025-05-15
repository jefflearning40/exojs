document.getElementById("btnCharger").addEventListener("click", function() {
  document.getElementById("contenu").textContent = "Chargement en cours...";

  setTimeout(function() {
    document.getElementById("contenu").textContent = "Contenu chargé avec succès ✅";
  }, 2000);
});