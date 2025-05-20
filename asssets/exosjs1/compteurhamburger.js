document.getElementById('date-creation').textContent = new Date().toLocaleDateString();
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        console.log('Menu toggled'); // Vérifiez si l'événement est déclenché
    });
});