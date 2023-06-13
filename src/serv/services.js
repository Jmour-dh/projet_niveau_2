import "../assets/styles/styles.scss";
import "./services.scss";

var btn_prev = document.querySelector("#btn-prev");
btn_prev.addEventListener("click", function () {
  plusSlides(-1);
});
var btn_next = document.querySelector("#btn-next");
btn_next.addEventListener("click", function () {
  plusSlides(+1);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}



/* tab */

function openMode(ModeName) {

  var i;

  var x = document.getElementsByClassName("Mode");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(ModeName).style.display = "block";

}

