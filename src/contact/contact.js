import "./contact.scss";
import "../assets/styles/styles.scss";

document.getElementById("msg").addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien

  alert("Votre message est bien envoyer.");
  window.location.href = "./index.html"; // Redirige vers la page index.html
});