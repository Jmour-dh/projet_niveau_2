import "./panier.scss";
import "../assets/styles/styles.scss";

document.getElementById("valider-panier").addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien

  alert("Votre panier a bien été validé.");
  window.location.href = "./chargement.html"; // Redirige vers la page chargement.html
});