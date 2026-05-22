function myFunction(){
    var x = document.getElementById("burger");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}

// Get the modal
var modal = document.querySelectorAll("modal");

// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

//When the user clicks on <span> (x), close the modal
for (var i = 0; i < span.length; i++) {
 span[i].onclick = function() {
    for (var index in modal) {
      if (typeof modal[index].style !== 'undefined') modal[index].style.display = 'none';    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modal) {
      if (typeof modal[index].style !== 'undefined') modal[index].style.display = 'none'; 
    }
  }
}
// code for x var and if/else gotten from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp 
// for "pop-up text" https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks on <span> (x), close the modal