let counter = 0;
let temps = null;

const startButton = document.getElementById("demarrer");
const stopButton = document.getElementById("pause");
const rstButton = document.getElementById("reset");

const counterElement = document.getElementById("affichage");

function miseAjourSeconde() {
  if (counter <= 1) {
    counterElement.textContent = `Temps : ${counter} seconde`;
  } else {
    counterElement.textContent = `Temps : ${counter} secondes`;
  }
}

startButton.addEventListener("click", () => {
  if (!temps) { 
    temps = setInterval(() => {
      counter++;
      miseAjourSeconde();
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(temps);
  temps = null; 
});

rstButton.addEventListener("click", () => {
  clearInterval(temps);
  temps = null; 
  counter = 0;
  miseAjourSeconde();
});
// c'est presque la meme chose que le defi 4