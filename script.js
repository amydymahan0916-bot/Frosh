let cart = [];

function addToCart(name, price){
cart.push({name, price});
updateCart();
}

function updateCart(){
localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart(){
let data = localStorage.getItem("cart");
if(data){
cart = JSON.parse(data);
}
}

function goToPayment(){
window.location.href = "payment.html";
}

loadCart();
