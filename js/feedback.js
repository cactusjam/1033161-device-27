var link = document.querySelector(".btn_feedback");
var popup = document.querySelector(".modal_feedback");
var close = popup.querySelector(".modal_close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=user_name]");
var email = popup.querySelector("[name=user_email]");
var message = popup.querySelector("[name=user_message]")

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal_show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");
    popup.classList.remove("modal_error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal_error");
    popup.offsetWidth = popup.offsetWidth; 
    popup.classList.add("modal_error"); 
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal_show")) {
        popup.classList.remove("modal_show");
        popup.classList.remove("modal_error"); 
      }
    }
  });

