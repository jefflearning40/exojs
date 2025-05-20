document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez les liens et les popups
    const helpLink = document.querySelector('a[href="#help"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const eggLink = document.querySelector('a[href="#egg"]');
    const riceLink = document.querySelector('a[href="#rice"]');
    const pastaLink = document.querySelector('a[href="#pasta"]');
    const helpPopup = document.getElementById('popup');
    const aboutPopup = document.getElementById('about-popup');
    const eggPopup = document.getElementById('egg-popup');
    const ricePopup = document.getElementById('rice-popup');
    const pastaPopup = document.getElementById('pasta-popup');
    const closeButtons = document.querySelectorAll('.close');

    // Sélectionnez les boutons "Egg", "Rice" et "Pasta"
    const eggButton = document.querySelector('.btn5');
    const riceButton = document.querySelector('.btn6');
    const pastaButton = document.querySelector('.btn7');

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Aide"
    helpLink.addEventListener('click', function(event) {
        event.preventDefault();
        helpPopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "À propos"
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutPopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Œufs"
    eggLink.addEventListener('click', function(event) {
        event.preventDefault();
        eggPopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Riz"
    riceLink.addEventListener('click', function(event) {
        event.preventDefault();
        ricePopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Pâtes"
    pastaLink.addEventListener('click', function(event) {
        event.preventDefault();
        pastaPopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Œufs" avec le bouton "Egg"
    eggButton.addEventListener('click', function(event) {
        event.preventDefault();
        eggPopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Riz" avec le bouton "Rice"
    riceButton.addEventListener('click', function(event) {
        event.preventDefault();
        ricePopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour ouvrir le popup "Pâtes" avec le bouton "Pasta"
    pastaButton.addEventListener('click', function(event) {
        event.preventDefault();
        pastaPopup.style.display = 'block';
    });

    // Ajoutez un écouteur d'événement pour fermer les popups
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        });
    });

    // Fermez le popup si l'utilisateur clique en dehors de celui-ci
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });

    // Ajoutez un écouteur d'événement pour envoyer le temps au minuteur
    document.querySelectorAll('.egg-time, .rice-time, .pasta-time').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const timeInSeconds = parseInt(this.getAttribute('data-time'));
            compteur = timeInSeconds;
            ecran.textContent = formatTime(timeInSeconds);
            this.closest('.popup').style.display = 'none'; // Fermez le popup après avoir sélectionné le temps
        });
    });
});

// Fonction pour formater le temps en minutes et secondes
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Formater les minutes et secondes pour avoir toujours deux chiffres
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;
    let secondsStr = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return minutesStr + ":" + secondsStr;
}