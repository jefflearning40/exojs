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

// Sélectionnez les éléments audio
const pouleSound = document.getElementById('poule-sound');
const rizSound = document.getElementById('riz-sound');
const patesSound = document.getElementById('pates-sound');

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

                // Jouer le son approprié lorsque le compteur atteint zéro
                if (boutonoeuf.classList.contains('active')) {
                    pouleSound.play();
                } else if (boutonriz.classList.contains('active')) {
                    rizSound.play();
                } else if (boutonpates.classList.contains('active')) {
                    patesSound.play();
                }
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
    boutonoeuf.classList.add('active');
    boutonriz.classList.remove('active');
    boutonpates.classList.remove('active');
});

boutonriz.addEventListener("click", () => {
    compteur = 200;
    ecran.textContent = compteur;
    boutonoeuf.classList.remove('active');
    boutonriz.classList.add('active');
    boutonpates.classList.remove('active');
});

boutonpates.addEventListener("click", () => {
    compteur = 240;
    ecran.textContent = compteur;
    boutonoeuf.classList.remove('active');
    boutonriz.classList.remove('active');
    boutonpates.classList.add('active');
});

// Initialisez le bouton comme inactif au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    boutonstart.classList.add('inactive');
});