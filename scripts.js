let currentLanguage = 'es'; // Idioma predeterminado

// Función para cambiar el idioma
function changeLanguage(language) {
    currentLanguage = language;
    loadTranslations();
}

// Cargar las traducciones
function loadTranslations() {
    fetch(`locales/${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (data[key]) {
                    if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                        element.innerText = data[key]; // Cambiar el texto de los botones y enlaces
                    } else {
                        element.innerHTML = data[key]; // Cambiar el contenido de los títulos y párrafos
                    }
                }
            });
        })
        .catch(error => console.error('Error al cargar las traducciones:', error));
}

// Cargar las traducciones al cargar la página
window.onload = loadTranslations;
