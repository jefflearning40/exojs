let simpleQuote='Bonjour tout le monde';
let doubleQuote='JavaScript est génial';
let templateLiteral=`Il fait ${2 + 2} degrés`;
console.log(simpleQuote);
console.log(doubleQuote);
console.log(templateLiteral);
console.log("Longueur de simple 'simple quote':",simpleQuote.length);
console.log("En majuscules:",simpleQuote.toUpperCase());
console.log("En minuscules:",simpleQuote.toLowerCase());
console.log("Sans Espaces:","   Hello".trim());
//-------------------------------------------------
console.log("Premier caractere de 'JavaScript':",'JavaScript'.charAt(0));
console.log("Position de 'World':",'Hello World!'.indexOf('World'));
console.log("Position de 'z' dans 'Javascript':",'Javascript'.indexOf('z'));
let sentence='Manipulation de chaines';
console.log("Avec Slice :",sentence.slice(0,12));
console.log("Avec substring :",sentence.substring(0,12));
let phrase = 'Bonjour tout le monde';
console.log(phrase.replace('Bonjour', 'Salut'));

let text = 'ToutouMédor est gentil. ToutouMédor est gourmand.';
console.log(text.replace(/ToutouMédor/g, 'Médor'));

let data = 'pomme,banane,cerise';
console.log("isoler chaque mots de la liste :",data.split(','));
console.log('JavaScript est flexible'.includes('flexibles'));

let greeting = 'Bonjour, ' + 'le monde!';
console.log(greeting);

let name = 'Médor';
let welcomeMessage = `Bienvenue à ${name}, notre nouveau toutou!`;
console.log(welcomeMessage);
//------------------------------------------------
//defis 1 :chaines de caracteres
let message="hello world !";

function capitalizeFirstLetter(message){

return console.log((message.charAt(0)).toUpperCase()+message.slice(1,message.length));}

capitalizeFirstLetter(message);
//-------------------------------------------------
//defis 2
let a=0;
let message1="hello hello hello hello";
function countOccurences (message1){

a=(message1.split(" "));
b=a.length
c=a[0];
return console.log(`Le mot ${c} est utilisé ${b} fois`)
}
countOccurences(message1);

//------------------------------------------------
//defis 3
let message3="Hello, world !";

function truncatString(message3){
    a=message3.length;
    if (a>5){
        b=message3.slice(0,5)+"...";
        return console.log(b);
    }
    return console.log(message3);
}

truncatString(message3);
//---------------------------------------------

