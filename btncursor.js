let index = 0;

const colors = ["red", "blue", "yellow", "green", "purple"];

console.log(colors.length);

const titre = document.querySelector("h1");
const fond = document.querySelector("body");
const bouton1 = document.getElementById("btn1");
const bouton2 = document.getElementById("btn2");
const bouton3 = document.getElementById("btn3");

bouton1.addEventListener("click", function () {
  titre.style.color = colors[index];
  index++;

  if (index >= colors.length) {
    index = 0;
  }
});
bouton2.addEventListener("click", function () {
  titre.style.background = colors[index];
  index++;
  if (index >= colors.length) {
    index = 0;
  }
});
bouton3.addEventListener("click", function () {
  fond.style.background = colors[index];
  index++;
  if (index >= colors.length) {
    index = 0;
  }
});
