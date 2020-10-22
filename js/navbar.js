
/* slideshow js */
var slideIndex = 1;
showSlides(slideIndex);

/* controls */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* image controls */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Navbar */

// get the hamburger element

var hamburger = document.getElementById("hamburger");

// get the menu element

var menu = document.getElementById("menu");

// get the overlay element

var overlay = document.getElementById("overlay");

// define toggle function

function toggleMenu() {
      /*either adds or removes avtive class from element */
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  
}

// execute toggle function from hamburger on click

hamburger.addEventListener("click", toggleMenu);

// executetoggle function from menu on click

menu.addEventListener("click", toggleMenu);

// exuecute toggle function from overlay on click

overlay.addEventListener("click", toggleMenu);