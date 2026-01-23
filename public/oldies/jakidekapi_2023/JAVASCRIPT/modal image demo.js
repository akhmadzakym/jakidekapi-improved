// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var paragraphText = document.getElementById("paragraph");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  paragraphText.innerHTML = this.p;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal1");

var img =document.getElementById("myImg1");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption1");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() {
    modal.style.display = "none";
}