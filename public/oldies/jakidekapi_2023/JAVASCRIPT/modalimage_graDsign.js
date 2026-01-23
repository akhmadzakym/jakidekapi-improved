window.onload = function() {
var modal = document.getElementById("myModalB1");
var img = document.getElementById("opn");
var modalImg = document.getElementById("myImgB1");

var captionText = document.getElementById("captionB1");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText = this.alt;
}

var span = document.getElementsByClassName("closeB1")[0];

span.onclick = function(){
    modal.style.display = "none";
}
//tombol x keluar




}