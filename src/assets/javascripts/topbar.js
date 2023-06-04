
/* Set the width of the sidebar to 250px (show it) */
var button = document.querySelector("#some-button-id");
button.addEventListener("click", function () {
  openNav();
});

var closebutton = document.querySelector("#close-button-id");
closebutton.addEventListener("click", function () {
  closeNav();
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
