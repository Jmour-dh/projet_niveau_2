import "./chargement.scss";
import "../assets/styles/styles.scss";


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("charge").style.display = "none";
  window.location.href = "./index.html";
}

myFunction();
