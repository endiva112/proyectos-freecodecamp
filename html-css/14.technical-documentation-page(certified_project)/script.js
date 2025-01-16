// Obtener el checkbox
const darkModeToggle = document.getElementById('switch');

// Agregar un event listener para el cambio del estado del checkbox
darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
