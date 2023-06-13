import "../assets/styles/styles.scss";
<<<<<<< HEAD
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

=======
/* tab */

// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }

//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.classList.add("active");
//   openTab();
// }

function openMode(ModeName) {

    var i;
  
    var x = document.getElementsByClassName("Mode");
  
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(ModeName).style.display = "block";
  
  }
>>>>>>> d19a62ea6a3b9aa3aa3d677589012dd3be89db11
