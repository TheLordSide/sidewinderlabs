// Fonction de téléchargement
function downloadApp(event) {
    event.preventDefault();
    
    // Remplacez cette URL par le lien réel de votre APK sur GitHub
    const apkUrl = 'https://github.com/TheLordSide/EcoCalc/releases/latest/download/ecocalc.apk';
   /*  
    // Pour l'instant, affiche une alerte
    alert('Fonctionnalité de téléchargement\n\nPour activer le téléchargement :\n1. Uploadez votre APK dans les releases GitHub\n2. Remplacez "apkUrl" dans le code avec le lien de téléchargement réel');
     */
    // Décommentez cette ligne quand votre APK sera disponible :
    window.location.href = apkUrl;
}

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments animés
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tool-card, .feature-item, .screenshot-card').forEach(el => {
        observer.observe(el);
    });
});