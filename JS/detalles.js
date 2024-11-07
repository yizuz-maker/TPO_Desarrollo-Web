const products = [
    {
    id: 1,
    brand: "Nike",
    name: "Dunk Low Pro SB 'Freddy Krueger'",
    price: "$100,000.00 USD",
    image: "./IMAGENES/FREDY.webp",
    description: "Este es un modelo exclusivo de Dunk Low Pro SB inspirado en Freddy Krueger."
    },
    {
    id: 2,
    brand: "Jordan",
    name: "OVO x Air Jordan 14 Retro 'Gods Plan' Sample",
    price: "$59,999.00 USD",
    image: "./IMAGENES/14 retro.webp",
    description: "Una colaboración especial entre OVO y Jordan."
    },
    {
    id: 3,
    brand:"Nike",
    name:"Louis Vuitton x Air Force 1 Low 'Monogram Damier' Pilot Case",
    price:"$115,000.00 USD",
    image:"./IMAGENES/vuittone.webp",
    description:"Una colaboracion entre louis vuitton y Air Force 1 Low "
    },
    {
    id: 4,
    brand:"Jordan",
    name:"Red Ribbon Recon x Air Jordan 1 Retro High 'Supreme & Louis Vuitton' Custom",
    price:"$33,500.00 USD",
    image:"./IMAGENES/red vuitton.webp",
    description:"Una colaboracion de Jordan con Supreme & Louis Vuitton"
    },
    {
    id: 5,
    brand:"Jordan",
    name:"Eminen x Carhartt x Air Jordan 4 retro 'black chrome'",
    price:"$26,995.00 USD",
    image:"./IMAGENES/eminem.webp",
    description:"Colaboracion de jordan con el famoso rapero Eminem"
    },
    {
    id: 6,
    brand:"Nike",
    name:"Zoom LeBron 6 'Stewie' Sample",
    price:"$23,430.00 USD",
    image:"./IMAGENES/lebron animadas.webp",
    description:""
    },
    {
    id: 7,
    brand:"Nike",
    name:"Nike Mag 'Back To The Future",
    price:"$28,500.00 USD",
    image:"./IMAGENES/future.webp",
    description:"Colaboracion de jordan con la pelicula Back to the Future"
    },
    {
    id: 8,
    brand:" Nike",
    name:"Dunk High Sb 'Iron Maiden'",
    price:"$26,490.00 USD",
    image:"./IMAGENES/face.webp",
    description:"Colaboracion de Nike con la banda Iron Maiden"
    },
    {
    id: 9,
    brand:"Nike",
    name:"Scarr's Pizza x Air Force 1 Low 'Friends and Family'",
    price:"$29,000.00 USD",
    image:"./IMAGENES/pizza.webp",
    description:"Colaboracion exclusiva de Scarr's Pizza x Air Force 1"
    },
    {
    id: 10,
    brand:"Jordan",
    name:"Travis Scott x Air Jordan 4 Retro 'Cactus Jack' Friends & Family",
    price:"$7,800.00",
    image:"./IMAGENES/travis.webp",
    description:"Colaboracion exclusiva de Jordan x Travis Scott"
    },
    {
    id: 11,
    brand:"Supreme",
    name:"Supreme Blow Back Rayon Short-Sleeve Shirt 'Black'",
    price:"$8,000.00 USD",
    image:"./IMAGENES/camisaSupreme.webp",
    description:""
    },
    {
    id: 12,
    brand:"Market",
    name:"Market Botanical Bear T-Shirt 'Chalk'",
    price:"$7,967.00 USD",
    image:"./IMAGENES/oso.webp",
    description:""
    },
    {
    id: 13,
    brand:"SUPREME",
    name:"SUPREME ROSE RUGBY",
    price:"$6,000.00 USD",
    image:"./IMAGENES/rugby.webp",
    description:""
    },
    {
    id: 14,
    brand:"Gucci",
    name:"Gucci Tiger Jacquard Wool Blend Sweater 'Green'",
    price:"$4,705.00 USD",
    image:"./IMAGENES/tigreverde.webp",
    description:""
    },
    {
    id: 15,
    brand:"Chrome Hearts",
    name:"Chrome Hearts Cross Patch Chino Pants 'Black/Camo'",
    price:"$15,743.00 USD",
    image:"./IMAGENES/lompaRelijioso.webp",
    description:""
    },
    {
    id: 16,
    brand:"Kith & Jeff Hamilton",
    name:"Kith & Jeff Hamilton for the NFL: Giants Leather Varsity Jacket 'Giants'",
    price:"$15,980.00 USD",
    image:"./IMAGENES/giants.webp",
    description:""
    },
    {
    id: 17,
    brand:"Amiri",
    name:"Amiri Palm Blouson 'Black'",
    price:"$4,600.00 USD",
    image:"./IMAGENES/amiri.webp",
    description:""
    },
    {
    id: 18,
    brand:"Off-White",
    name:"Off-White Logo Patch Varsity Jacket 'Black/Peacock'",
    price:"$5,230.00 USD",
    image:"./IMAGENES/offWhite.webp",
    description:""
    },
    {
    id: 19,
    brand:"Palace",
    name:"Palace Faster Jacket 'Navy/White'",
    price:"$3,743.00 USD",
    image:"./IMAGENES/palace.webp",
    description:""
    },
    {
    id: 20,
    brand:"",
    name:"Supreme x Yohji Yamamoto x Vanson Leathers Split Pant 'White'",
    price:"$2,365.00 usd",
    image:"./IMAGENES/supreme.webp",
    description:""
    },
];
// Obtener el ID del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Buscar el producto en el array
const product = products.find(p => p.id === productId);

// Definir las opciones de tallas
const sizesNumeric = ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"];
const sizesText = ["S", "M", "L", "XL", "XXL"];

// Seleccionar el contenedor de opciones de talla
const sizeOptionsContainer = document.querySelector(".size-options");

// Mostrar los datos del producto
if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;

    // Limpiar opciones de talla actuales
    sizeOptionsContainer.innerHTML = "";

    // Determinar qué opciones de talla mostrar
    const sizes = productId <= 10 ? sizesNumeric : sizesText;

    // Crear botones de talla según el ID del producto
    sizes.forEach(size => {
        const sizeButton = document.createElement("button");
        sizeButton.classList.add("size-option");
        sizeButton.textContent = size;
        sizeButton.setAttribute("data-size", size);

        // Agregar funcionalidad de selección de talla
        sizeButton.addEventListener("click", () => {
            document.querySelectorAll(".size-option").forEach(btn => btn.classList.remove("selected"));
            sizeButton.classList.add("selected");
            console.log("Talla seleccionada:", size);
        });

        // Añadir el botón al contenedor
        sizeOptionsContainer.appendChild(sizeButton);
    });
} else {
    // Si el producto no existe, mostrar un mensaje
    document.querySelector(".product-detail").innerHTML = "<p>Producto no encontrado.</p>";
}

// Funciones para cambiar cantidad
function increaseQuantity() {
    const quantityInput = document.getElementById("product-quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById("product-quantity");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Función para añadir el producto al carrito
function carritoProduct() {
    // Crear el objeto del producto seleccionado
    const selectedSize = document.querySelector(".size-option.selected")?.getAttribute("data-size") || null;
    const selectedProduct = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: parseInt(document.getElementById("product-quantity").value),
        size: selectedSize  // Guardar la talla seleccionada
    };

    // Obtener el carrito actual del Local Storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === selectedProduct.id && item.size === selectedProduct.size);

    if (existingProduct) {
        // Si el producto ya existe y la talla es la misma, aumentar la cantidad
        existingProduct.quantity += selectedProduct.quantity;
    } else {
        // Si el producto no existe o la talla es diferente, añadirlo al carrito
        cart.push(selectedProduct);
    }

    // Guardar el carrito actualizado en el Local Storage
    localStorage.setItem("cart", JSON.stringify(cart));

    const contador = document.getElementById("contadorItem");
    contador.innerHTML = cart.length;

    // Mostrar un mensaje de confirmación
    alert("Producto añadido al carrito");
}
