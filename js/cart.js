
let products = document.querySelectorAll(".product-buy");
const popupBuy = document.querySelector(".modal-order");
const continueBuy = document.querySelector(".button-continue-shopping");
const closePopupBuy = document.querySelector(".modal-close-order");

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popupBuy.classList.add('modal-show');
  });
}

continueBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-show");
});

closePopupBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupBuy.classList.contains("modal-show")) {
      evt.preventDefault();
      popupBuy.classList.remove("modal-show");
    }
  }
});

const searchForm = document.querySelector(".search-form");
const searchFocus = searchForm.querySelector("[name=search]")
let searchIcon = searchForm.querySelector("svg path");

searchFocus.addEventListener("mouseover", function (evt) {
  searchIcon.classList.add("search-svg-hover");
});

searchFocus.addEventListener("mouseout", function (evt) {
  searchIcon.classList.remove("search-svg-hover");
});

searchFocus.addEventListener('focus', function(){
  searchIcon.classList.add("search-svg-focus");
});

searchFocus.addEventListener('focusout', function(){
  searchIcon.classList.remove("search-svg-focus");
});

