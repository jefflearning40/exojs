document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez le lien "Recettes"
    const recettesLink = document.querySelector('a[href="#recettes"]');

    // Sélectionnez le sous-menu
    const dropdownContent = document.querySelector('.dropdown-content');

    // Ajoutez un écouteur d'événement pour afficher le sous-menu
    recettesLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Fermez le sous-menu si l'utilisateur clique en dehors de celui-ci
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            dropdownContent.style.display = 'none';
        }
    });
});