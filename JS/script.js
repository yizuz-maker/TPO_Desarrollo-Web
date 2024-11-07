let currentIndex = 0;
const items = document.querySelectorAll('.carousel li');
const totalItems = items.length;

function showCurrentItem() {
    const offset = -currentIndex * 100; // -100% por cada índice
    document.querySelector('.carousel ul').style.transform = `translateX(${offset}%)`;
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems; // Ciclo a través de los índices
    showCurrentItem();
}

function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo a través de los índices
    showCurrentItem();
}

// Cambiar automáticamente cada 3 segundos
setInterval(nextItem, 3000);

// Puedes agregar botones para navegar manualmente
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextItem();
    } else if (event.key === 'ArrowLeft') {
        prevItem();
    }
});