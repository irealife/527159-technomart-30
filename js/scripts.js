const linkFeedback = document.querySelector(".button-feedback");
const popupFeedback = document.querySelector(".modal-feedback");
const popupClose = popupFeedback.querySelector(".modal-close");
const formFeedback = popupFeedback.querySelector(".feedback-form");
const login = popupFeedback.querySelector("[name=login]");
const email = popupFeedback.querySelector("[name=email]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

linkFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
  popupFeedback.classList.remove("modal-error");
})

formFeedback.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-show");
      popupFeedback.classList.remove("modal-error");
    }
  }
});

const linkMap = document.querySelector(".small-map");
const popupMap = document.querySelector(".modal-map");
const popupCloseMap = popupMap.querySelector(".modal-close-map");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

popupCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
      popupMap.classList.remove("modal-error");
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

