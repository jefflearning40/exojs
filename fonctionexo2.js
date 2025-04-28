let nombre = 0;
let animal = "";

nombre = Number(prompt("choisir un nombre entre 1 et 5"));

function revelerAnimal(nombre) {
    if (nombre == 1) {
        animal = "Licorne";
    } else if (nombre == 2) {
        animal = "Grenouille";
    } else if (nombre == 3) {
        animal = "Dragon";
    } else if (nombre == 4) {
        animal = "Hibou";
    } else if (nombre == 5) {
        animal = "Escargot";
    } else {
        animal = "Chiffre inconnu est trop magique pour être interprété";
    }
    console.log(nombre + " : " + animal);
}

revelerAnimal(nombre);