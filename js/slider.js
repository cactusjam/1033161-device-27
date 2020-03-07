
var sliderControl = document.querySelectorAll(".slider_btn");
var slider = document.querySelectorAll(".slide_item");

var tabsControl = document.querySelectorAll(".tabs_nav .btn");
var tabs = document.querySelectorAll(".tab_content");


sliderControl.forEach(function (element) {
  element.addEventListener('click', function () {
    let dataSlide = element.getAttribute('data-slide');
    slider.forEach(function (element) {
      if (dataSlide === element.getAttribute('data-slide')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  });
});


  for (let i = 0; i < tabs.length; i++) {
      tabsControl[i].addEventListener('click', function() {
          for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains("active")) {
                tabs[i].classList.remove("active");
                tabsControl[i].classList.remove("btn_active")
          };
        };
        tabsControl[i].classList.add('btn_active');
        tabs[i].classList.add("active");
      });
  };