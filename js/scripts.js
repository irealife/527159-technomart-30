var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var map = document.querySelector(".small-map");
var bigmap = document.querySelector(".modal-map");
var closemap = document.querySelector(".modal-close-map");

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  bigmap.classList.add("modal-show");
});

closemap.addEventListener("click", function(evt) {
  evt.preventDefault();
  bigmap.classList.remove("modal-show");
});

var products = document.querySelectorAll(".product-buy");
var buy = document.querySelector(".modal-order");
var closebuy = document.querySelector(".modal-close-order");

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function (event) {
    evt.preventDefault();
    buy.classList.add('modal-show');
  });
}

closebuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  buy.classList.remove("modal-show");
});

