let cart = JSON.parse(localStorage.getItem("cart")) || [];
const contador = document.getElementById("contadorItem");
contador.innerHTML = cart.length;

