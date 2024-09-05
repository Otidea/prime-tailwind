// Script pour gérer l'ouverture/fermeture du menu
const toggleButton = document.getElementById('toggleMenuExpertise');
const menuItems = document.getElementById('menu-items');
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');

toggleButton.addEventListener('click', function() {
    // Mettre à jour l'état du bouton
    const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isOpen);

    menuItems.classList.toggle('open');
    menuBtn.classList.toggle('show');
    closeBtn.classList.toggle('show');
});

//TEXTE DEFILEMENT
function adjustAnimationDuration() {
    const text = document.getElementById('textDefilement');
    const container = document.querySelector('.containerDefilement');

    // Mesurer la largeur du texte et du conteneur
    const textWidth = text.offsetWidth;
    const containerWidth = container.offsetWidth;
    let duration = 0;
    if (window.screen.availWidth > 1600){
        duration = (textWidth / containerWidth) * 15;

    }else if (window.screen.availWidth > 1000){
        duration = (textWidth / containerWidth) * 10;
    }else{
        duration = (textWidth / containerWidth) * 5;
    }

    text.style.animationDuration = `${duration}s`;
}

window.onload = adjustAnimationDuration;
window.onresize = adjustAnimationDuration;
