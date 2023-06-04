import "./contact.scss";

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var productDescription = document.getElementById("product-description");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.style.display = "block";
  productDescription.innerHTML = `
  
  <div class="test-text">
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

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

/* description image 2 */

var modal02 = document.getElementById("myModal02");

var img02 = document.getElementById("myImg02");
var modalImg02 = document.getElementById("img02");
var captionText02 = document.getElementById("caption02");
var productDescription02 = document.getElementById("product-description02");

img02.onclick = function () {
  modal02.style.display = "block";
  modalImg02.src = this.src;
  captionText02.style.display = "block";
  productDescription02.innerHTML = `
  
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

// Get the <span> element that closes the modal
var span02 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span02.onclick = function () {
  modal02.style.display = "none";
};
