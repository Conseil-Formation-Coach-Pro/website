// Sélection des éléments
const popupHoraires = document.getElementById('popup-horaires');
const popupMap = document.getElementById('popup-map');
const openHoraires = document.getElementById('open-horaires');
const openMap = document.getElementById('open-map');
const closeBtns = document.querySelectorAll('.popup-content .close-btn');
const overlays = document.querySelectorAll('.popup-overlay');

// Fonction pour ouvrir une popup
function openPopup(popup) {
    popup.classList.add('active');
}

// Fonction pour fermer toutes les popups
function closePopups() {
    overlays.forEach(overlay => overlay.classList.remove('active'));
}

// Ouverture
if (openHoraires) openHoraires.addEventListener('click', e => {
    e.preventDefault();
    openPopup(popupHoraires);
});
if (openMap) openMap.addEventListener('click', e => {
    e.preventDefault();
    openPopup(popupMap);
});

// Fermeture via croix
closeBtns.forEach(btn => {
    btn.addEventListener('click', closePopups);
});

// Fermeture en cliquant en dehors
overlays.forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closePopups();
    });
});

// Supprimer l'attribut qui bloque le zoom natif et forcer le comportement par molette
const mapIframe = document.querySelector('#popup-map iframe');

// Retirer toute classe qui désactive les interactions
if (mapIframe) {
    mapIframe.classList.remove('inactive');
    mapIframe.style.pointerEvents = 'auto';

    // Injecter un paramètre pour désactiver le besoin de Ctrl (Google Maps le supporte via gestureHandling)
    const src = mapIframe.getAttribute('src');
    if (!src.includes('gestureHandling')) {
        const separator = src.includes('?') ? '&' : '?';
        mapIframe.setAttribute('src', `${src}${separator}gestureHandling=greedy`);
    }
}
