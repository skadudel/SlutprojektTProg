function myFunction(){
    var x = document.getElementById("burger");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}

// Get the modal
var modal = document.getElementById("MyModal");

var modal2 = document.getElementById("MyModal2");

// Get the button that opens the modal
var btn = document.getElementById("MyButton");

var btn = document.getElementById("MyButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
// code for x var and if/else gotten from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp 
// for "pop-up text" https://www.w3schools.com/howto/howto_css_modals.asp