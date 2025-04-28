
//demo 1
let age1=25;
console.log('age(let):',age1);
age1=26;
console.log('age apres rdéclaration',age1);
let nom='Alice';
console.log('nom(let):',nom);
const PI=3.14;
console.log('PI(const)',PI);
age1=30;
nom='Bob';
console.log('nouveau nom :',nom);
//PI=3.14159;
// demo2
let firstName='Alice';
let lastName="Smith";
let fullName= firstName + ' ' + lastName;
console.log(fullName);
let greeting="Hello";
let message= greeting.concat(',',fullName,'!');
console.log(message);
//demo3
let age = 30;
let bio = `My name is ${fullName} and I am ${age} years old.`;
console.log(bio);
//demo31
let numberUsers=100;
const Taux_Impot=0.15;
console.log('Qty users :',numberUsers);
console.log('Taux Impots :',Taux_Impot);
//demo4
let prenom='Alice';
let age2=25;
const PI2=3.15;
let estMajeur = age2 >= 18;
console.log('Bonjour '+prenom);
console.log('Age :',+age2)
console.log('Est majeur ? '+estMajeur);
console.log("Le double de l'age est " + age2*2);
console.log("pi est egal a "+PI2);
//demo5
// Variable globale
let messageGlobal = 'Je suis accessible partout';

function maFonction() {
let messageLocal = 'Je suis uniquement dans la fonction';
console.log('Message global:', messageGlobal);
console.log('Message local:', messageLocal);
}

maFonction();

console.log('Global dehors:', messageGlobal);
// console.log(messageLocal); // ❌ Erreur

if (true) {
let ville = 'Paris';
const pays = 'France';
console.log('Ville:', ville);
console.log('Pays:', pays);
}
//console.log(ville);
// console.log(ville); // ❌ Erreur
// console.log(pays); // ❌ Erreur

//demo 6
let num=10;
console.log(typeof num);
let name='Alice';
console.log(typeof name);

let isActive=true;
console.log(typeof isActive);

let funct=function(){};
console.log(typeof funct);

let notAssigned;
console.log(typeof notAssigned);
function checkInput(input) {

    if (typeof input==='string'){
        console.log("C'est une chaine de caracteres");
    }else if (typeof input==='number'){
            console.log("c'est un nombre");
    }else if (typeof input==='boolean'){
        console.log("c'est un boolean");
    }else{
        console.log("Franchement, j'vois pas c'que c'est !!!");
    }
    }
checkInput('Hello');
checkInput('1234');
checkInput(true);
checkInput(function(){});

//demo7
let nombre = 42;
let texte = 'Bonjour tout le monde';
let estValide = true;
let utilisateur = { nom: 'Alice', age: 30 };
let fruits = ['pomme', 'banane', 'cerise'];

console.log('Nombre:', nombre);
console.log('Texte:', texte);
console.log('Est valide:', estValide);
console.log('Utilisateur:', utilisateur);
console.log('Fruits:', fruits);


