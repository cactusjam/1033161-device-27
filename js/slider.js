
var sliderControl = document.querySelectorAll(".slider_input");
var slider = document.querySelectorAll(".slider_item");

for (let i = 0; i < slider.length; i++) {
    sliderControl[i].addEventListener('click', function () {
      if (sliderControl[i].checked) {
        slider[i].classList.add("active");
      };
      for (let i = 0; i < slider.length; i++)  {
        if (!sliderControl[i].checked) {
          slider[i].classList.remove("active");
        };
      }
    });
  };