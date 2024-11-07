// Función para cargar el carrito desde el Local Storage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Limpiar el contenedor antes de cargar

    
    // Verificar si el carrito está vacío
    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        document.getElementById("total-price").textContent = "0";
        return; // Detener ejecución si no hay productos
    }

    let totalPrice = 0;

    // Iterar sobre los productos en el carrito
    cartItems.forEach(item => {
        const itemTotal = parseFloat(item.price.replace("$", "").replace(",", "")) * item.quantity;
        totalPrice += itemTotal;

        // Crear el elemento de producto
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <div>
                <h4>${item.name}</h4>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: ${item.quantity}</p>
                <p>Subtotal: $${itemTotal.toFixed(2)}</p>
            </div>
            <button onclick="removeItem(${item.id})">Eliminar</button>
        `;
        
        cartContainer.appendChild(itemElement);
    });

    // Mostrar el precio total
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Recargar el carrito
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Cargar el carrito al inicio
loadCart();
