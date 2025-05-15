const quotes = [
    { text: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
    { text: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo" },
    { text: "Rien n'est permanent sauf le changement.", author: "Héraclite" },
    { text: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci" },
    { text: "Ce qui compte,chez un homme, ce n'est pas sa couleur de peau ou la texture de sa chevelure, mais la texture et la qualité de son âme.", author: "Martin Luther King" },
    { text: "C'est un petit pas pour l'homme, un bond de géant pour l'humanité", author: "Niel Amstrong" },
    {text:"Si tu pense être bête, va chez amazone, ils on peut etre des neurones ",author:"moi"},

];

let lastQuoteIndex = -1;

document.getElementById('new-quote').addEventListener('click', function() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);

    lastQuoteIndex = randomIndex;

    const quote = quotes[randomIndex];
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `— ${quote.author}`;

    quoteText.classList.add('fade-in');
    quoteAuthor.classList.add('fade-in');

    setTimeout(() => {
        quoteText.classList.remove('fade-in');
        quoteAuthor.classList.remove('fade-in');
    }, 1000);
});

document.getElementById('tweet-quote').addEventListener('click', function() {
    const quoteText = document.getElementById('quote-text').textContent;
    const quoteAuthor = document.getElementById('quote-author').textContent;
    const tweetText = encodeURIComponent(`"${quoteText}" ${quoteAuthor}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
});

document.getElementById('copy-quote').addEventListener('click', function() {
    const quoteText = document.getElementById('quote-text').textContent;
    const quoteAuthor = document.getElementById('quote-author').textContent;
    const textToCopy = `"${quoteText}" ${quoteAuthor}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Citation copiée dans le presse-papiers!');
    }).catch(err => {
        console.error('Erreur lors de la copie: ', err);
    });
});
