let compteur = 0;
const ecran = document.querySelector(".ecran");
const boutonplus = document.querySelector('.btn1');
const boutonmoin = document.querySelector('.btn2');
const boutonraz = document.querySelector('.btn3');
const boutonstart = document.querySelector('.btn4');
const boutonoeuf = document.querySelector('.btn5');
const boutonriz = document.querySelector('.btn6');
const boutonpates = document.querySelector('.btn7');

let intervalId = null;
let timer = null;

boutonplus.addEventListener("mousedown", () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            compteur++;
            ecran.textContent = compteur;
        }, 100);
    }
});

boutonplus.addEventListener("mouseup", () => {
    clearInterval(intervalId);
    intervalId = null;
});

boutonplus.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    intervalId = null;
});

boutonmoin.addEventListener("click", () => {
    compteur--;
    ecran.textContent = compteur;
});

boutonraz.addEventListener("click", () => {
    compteur = 0;
    ecran.textContent = compteur;
});

boutonstart.addEventListener("dblclick", () => {
    if (timer === null) {
        boutonstart.classList.remove('inactive');
        boutonstart.classList.add('active');
        boutonstart.textContent = "Active";
        timer = setInterval(() => {
            if (compteur > 0) {
                compteur--;
                // Convertir le compteur en minutes et secondes
                let minutes = Math.floor(compteur / 60);
                let secondes = compteur % 60;

                // Formater les minutes et secondes pour avoir toujours deux chiffres
                let minutesStr = minutes < 10 ? "0" + minutes : minutes;
                let secondesStr = secondes < 10 ? "0" + secondes : secondes;

                // Afficher le temps formaté
                ecran.textContent = minutesStr + ":" + secondesStr;
            } else {
                clearInterval(timer);
                timer = null;
                boutonstart.classList.remove('active');
                boutonstart.classList.add('inactive');
                boutonstart.textContent = "Start";
            }
        }, 1000);
    } else {
        clearInterval(timer);
        timer = null;
        boutonstart.classList.remove('active');
        boutonstart.classList.add('inactive');
        boutonstart.textContent = "Start";
    }
});

// Ajoutez des écouteurs d'événements pour les boutons "Œuf", "Riz", et "Pâtes"
boutonoeuf.addEventListener("click", () => {
    compteur = 180;
    ecran.textContent = compteur;
});

boutonriz.addEventListener("click", () => {
    compteur = 200;
    ecran.textContent = compteur;
});

boutonpates.addEventListener("click", () => {
    compteur = 240;
    ecran.textContent = compteur;
});

// Initialisez le bouton comme inactif au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    boutonstart.classList.add('inactive');
});
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez les liens et les popups
    const helpLink = document.querySelector('a[href="#help"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const eggLink = document.querySelector('a[href="#egg"]');
    const helpPopup = document.getElementById('popup');
    const aboutPopup = document.getElementById('about-popup');
    const eggPopup = document.getElementById('egg-popup');
    const closeButtons = document.querySelectorAll('.close');

    // Sélectionnez les éléments cliquables dans le popup "Œufs"
    const eggTimeLinks = document.querySelectorAll('.egg-time');

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

    // Ajoutez un écouteur d'événement pour envoyer le temps au minuteur
    eggTimeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const timeInSeconds = parseInt(this.getAttribute('data-time'));
            compteur = timeInSeconds;
            ecran.textContent = formatTime(timeInSeconds);
            eggPopup.style.display = 'none'; // Fermez le popup après avoir sélectionné le temps
        });
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