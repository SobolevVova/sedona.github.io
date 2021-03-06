var button = document.querySelector(".js-button");
var popup = document.querySelector(".booking-form");


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-show");
});

button.addEventListener("dbclick", function (evt) {
  evt.preventDefault();
  popup.classList.toggle(".booking-form");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("form-show")) {
      popup.classList.remove("form-show");
    }
  }
});
