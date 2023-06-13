import "./services.scss";
import "../assets/styles/styles.scss";
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