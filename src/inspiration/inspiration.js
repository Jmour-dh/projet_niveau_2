import "./inspiration.scss";

// Get the modal
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

var modal02 = document.getElementById("myModal02");
// Get the image and insert it inside the modal - use its "alt" text as a caption

var img02 = document.getElementById("myImg02");
var modalImg02 = document.getElementById("img02");

img02.onclick = function () {
  modal02.style.display = "block";
  modalImg02.src = this.src;
};

// Get the <span> element that closes the modal

var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal

span2.onclick = function () {
  modal02.style.display = "none";
};

var modal03 = document.getElementById("myModal03");
// Get the image and insert it inside the modal - use its "alt" text as a caption

var img03 = document.getElementById("myImg03");
var modalImg03 = document.getElementById("img03");

img03.onclick = function () {
  modal03.style.display = "block";
  modalImg03.src = this.src;
};

// Get the <span> element that closes the modal

var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal

span3.onclick = function () {
  modal03.style.display = "none";
};

var modal04 = document.getElementById("myModal04");

var img04 = document.getElementById("myImg04");
var modalImg04 = document.getElementById("img04");

img04.onclick = function () {
  modal04.style.display = "block";
  modalImg04.src = this.src;
};

// Get the <span> element that closes the modal

var span4 = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal

span4.onclick = function () {
  modal04.style.display = "none";
};

var modal05 = document.getElementById("myModal05");

var img05 = document.getElementById("myImg05");
var modalImg05 = document.getElementById("img05");

img05.onclick = function () {
  modal05.style.display = "block";
  modalImg05.src = this.src;
};

// Get the <span> element that closes the modal

var span5 = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal

span5.onclick = function () {
  modal05.style.display = "none";
};

var modal06 = document.getElementById("myModal06");

var img06 = document.getElementById("myImg06");
var modalImg06 = document.getElementById("img06");

img06.onclick = function () {
  modal06.style.display = "block";
  modalImg06.src = this.src;
};

// Get the <span> element that closes the modal

var span6 = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal

span6.onclick = function () {
  modal06.style.display = "none";
};
