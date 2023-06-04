import "./produits.scss";
import "../assets/styles/styles.scss";
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
var btns = btnContainer.getElementsByClassName("btn5");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    console.log(btns);
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
    btns[i].classList.add("active");
  });
}

/* zoom*/

/* image 1*/

var modal01 = document.getElementById("myModal01");

var img01 = document.getElementById("myImg01");
var modalImg01 = document.getElementById("img01");
var captionText01 = document.getElementById("caption01");
var produitDescription01 = document.getElementById("produit-description01");

img01.onclick = function () {
  modal01.style.display = "block";
  modalImg01.src = this.src;
  captionText01.style.display = "block";
  produitDescription01.innerHTML = `
  
  <div class="description-text">
  <h5>Fauteuil Supra</h5>
    <p>Fauteuil design en bois et tissu.</p>
    <p>Dimensions et poids:</p>
    <p>Profondeur: 80cm</p>
    <p>Longueur: 65cm</p>
    <p>100 €</p>
  </div>

  <div>
      <a
      href="./panier.html"
      class="btn btn-primary my-10"
      >AJOUTER <i class="fa-solid fa-cart-shopping"></i
      ></a>
  </div>
`;
};

var span01 = document.getElementsByClassName("close")[0];

span01.onclick = function () {
  modal01.style.display = "none";
};

/* image 2*/

var modal02 = document.getElementById("myModal02");

var img02 = document.getElementById("myImg02");
var modalImg02 = document.getElementById("img02");
var captionText02 = document.getElementById("caption02");
var produitDescription02 = document.getElementById("produit-description02");

img02.onclick = function () {
  modal02.style.display = "block";
  modalImg02.src = this.src;
  captionText02.style.display = "block";
  produitDescription02.innerHTML = `
  
  <div class="description-text">
  <h5>Fauteuil Dhiarry</h5>
    <p>Fauteuil design en bois et tissu.</p>
    <p>Dimensions et poids:</p>
    <p>Profondeur: 80cm</p>
    <p>Longueur: 85cm</p>
    <p>200 €</p>
  </div>

  <div>
      <a
      href="./panier.html"
      class="btn btn-primary my-10"
      >AJOUTER <i class="fa-solid fa-cart-shopping"></i
      ></a>
  </div>
`;
};

var span02 = document.getElementsByClassName("close")[1];

span02.onclick = function () {
  modal02.style.display = "none";
};

/* image 3*/

var modal03 = document.getElementById("myModal03");

var img03 = document.getElementById("myImg03");
var modalImg03 = document.getElementById("img03");
var captionText03 = document.getElementById("caption03");
var produitDescription03 = document.getElementById("produit-description03");

img03.onclick = function () {
  modal03.style.display = "block";
  modalImg03.src = this.src;
  captionText03.style.display = "block";
  produitDescription03.innerHTML = `
  
  <div class="description-text">
  <h5>Bureau Dembourabah</h5>
    <p>Bueau moderne en bois</p>
    <p>Dimensions et poids:</p>
    <p>Profondeur: 80cm</p>
    <p>Hauteur: 150cm</p>
    <p>Longueur: 85cm</p>
    <p>150 €</p>
  </div>

  <div>
      <a
      href="./panier.html"
      class="btn btn-primary my-10"
      >AJOUTER <i class="fa-solid fa-cart-shopping"></i
      ></a>
  </div>
`;
};

var span03 = document.getElementsByClassName("close")[2];

span03.onclick = function () {
  modal03.style.display = "none";
};

/* image 4*/

var modal04 = document.getElementById("myModal04");

var img04 = document.getElementById("myImg04");
var modalImg04 = document.getElementById("img04");
var captionText04 = document.getElementById("caption04");
var produitDescription04 = document.getElementById("produit-description04");

img04.onclick = function () {
  modal04.style.display = "block";
  modalImg04.src = this.src;
  captionText04.style.display = "block";
  produitDescription04.innerHTML = `
  
  <div class="description-text">
  <h5>Table Xavitina</h5>
    <p>Table industrielle en bois</p>
    <p>Dimensions et poids:</p>
    <p>Profondeur: 80cm</p>
    <p>Hauteur: 150cm</p>
    <p>Longueur: 185cm</p>
    <p>200 €</p>
  </div>

  <div>
      <a
      href="./panier.html"
      class="btn btn-primary my-10"
      >AJOUTER <i class="fa-solid fa-cart-shopping"></i
      ></a>
  </div>
`;
};

var span04 = document.getElementsByClassName("close")[3];

span04.onclick = function () {
  modal04.style.display = "none";
};

/* image 5*/

var modal05 = document.getElementById("myModal05");

var img05 = document.getElementById("myImg05");
var modalImg05 = document.getElementById("img05");
var captionText05 = document.getElementById("caption05");
var produitDescription05 = document.getElementById("produit-description05");

img05.onclick = function () {
  modal05.style.display = "block";
  modalImg05.src = this.src;
  captionText05.style.display = "block";
  produitDescription05.innerHTML = `
  
  <div class="description-text">
  <h5>Pot Marcaaron</h5>
    <p>Pots en bois</p>
    <p>Dimensions et poids:</p>
    <p>Profondeur: 80cm</p>
    <p>Hauteur: 150cm</p>
    <p>Longueur: 185cm</p>
    <p>50 €</p>
  </div>

  <div>
      <a
      href="./panier.html"
      class="btn btn-primary my-10"
      >AJOUTER <i class="fa-solid fa-cart-shopping"></i
      ></a>
  </div>
`;
};

var span05 = document.getElementsByClassName("close")[4];

span05.onclick = function () {
  modal05.style.display = "none";
};

/* image 6*/

var modal06 = document.getElementById("myModal06");

var img06 = document.getElementById("myImg06");
var modalImg06 = document.getElementById("img06");
var captionText06 = document.getElementById("caption06");
var produitDescription06 = document.getElementById("produit-description06");

img06.onclick = function () {
  modal06.style.display = "block";
  modalImg06.src = this.src;
  captionText06.style.display = "block";
  produitDescription06.innerHTML = `
  
  <div class="description-text">
  <h5>Miroir Davimartinio</h5>
    <p>Dimension et poids</p>
    <p>Hauteur: 80cm</p>
    <p>Longueur: 55cm</p>
    <p>90 €</p>
  </div>

  <div>
      <a
      href="./panier.html"
      class="btn btn-primary my-10"
      >AJOUTER <i class="fa-solid fa-cart-shopping"></i
      ></a>
  </div>
`;
};

var span06 = document.getElementsByClassName("close")[5];

span06.onclick = function () {
  modal06.style.display = "none";
};
