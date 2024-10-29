document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Lista de productos como un array de objetos
    const productos = [
        { id: 1, name: "Mañanita", image: "/Imagenes/mananitayerba.png", description: "Yerba mate de sabor clásico.", price: "$500" },
        { id: 2, name: "Yerba Mate Orgánica", image: "yerba2.jpg", description: "Yerba orgánica de la mejor calidad.", price: "$600" }
    ];

    // Buscar el producto por ID en el array
    const producto = productos.find(prod => prod.id == productId);

    if (producto) {
        document.getElementById('product-name').textContent = producto.name;
        document.getElementById('product-image').src = producto.image;
        document.getElementById('product-description').textContent = producto.description;
        document.getElementById('product-price').textContent = producto.price;
    } else {
        document.getElementById('product-container').textContent = "Producto no encontrado.";
    }
});
