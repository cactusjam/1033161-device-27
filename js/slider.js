
var sliderControl = document.querySelectorAll(".slider_input");
var slider = document.querySelectorAll(".slide_item");
var tabsControl = document.querySelectorAll(".tabs_nav .btn");
var tabs = document.querySelectorAll(".tab_content");


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