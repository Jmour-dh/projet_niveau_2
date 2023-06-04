import "./produits.scss";

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");

  // Ajouter ou supprimer la classe "hover" en fonction de l'état du dropdown
  var btn = document.getElementById("myButton");
  if (dropdown.classList.contains("show")) {
    btn.classList.add("hover");
  } else {
    btn.classList.remove("hover");
  }
}

var btn = document.querySelector("#myButton");
btn.addEventListener("click", myFunction);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }

    // Supprimer la classe "hover" lors du clic en dehors du bouton
    var btn = document.getElementById("myButton");
    btn.classList.remove("hover");
  }
};

/* filter */

var filterSelectAll = document.querySelector("#filterSelection-all");
filterSelectAll.addEventListener("click", function () {
  filterSelection("all");
});

var filterSelectConfort = document.querySelector("#filterSelection-confort");
filterSelectConfort.addEventListener("click", function () {
  filterSelection("confort");
});

var filterSelectSurface = document.querySelector("#filterSelection-surface");
filterSelectSurface.addEventListener("click", function () {
  filterSelection("surface");
});

var filterSelectDecoration = document.querySelector(
  "#filterSelection-decoration"
);
filterSelectDecoration.addEventListener("click", function () {
  filterSelection("decoration");
});

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("produit-container-elem");
  if (c == "all") {
    c = "";
  }
  for (i = 0; i < x.length; i++) {
    if (c === "" || x[i].querySelector(".filterDiv-" + c)) {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
}

var btnContainer = document.getElementById("myDropdown");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* zoom*/

var modal = document.getElementById("myModal");

var img01 = document.getElementById("myImg01");
var modalImg01 = document.getElementById("img01");

img01.onclick = function () {
  modal.style.display = "block";
  modalImg01.src = this.src;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
