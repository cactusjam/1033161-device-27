var link = document.querySelector(".btn_feedback");
var popup = document.querySelector(".modal_feedback");
var close = document.querySelector(".modal_close");
var login = popup.querySelector("[name=user_name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=user_email]")

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal_show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal_show")) {
        popup.classList.remove("modal_show");
      }
    }
  });



