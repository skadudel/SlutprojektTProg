function myFunction(){
    var x = document.getElementById("burger");
    if (x.style.display === "block"){
        x.style.display = "none";
        document.getElementsById("TheGuild").style.padding = "100px 50px 56px 50px";
    } else{
        x.style.display = "block";
        document.getElementsById("TheGuild").style.padding = "200px 50px 56px 50px";
    }
}
// code for x var and if/else gotten from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp 
// code for padding increase/decrease from https://www.w3schools.com/Jsref/tryit.asp?filename=tryjsref_style_padding