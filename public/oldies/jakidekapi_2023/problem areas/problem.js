//gambar 1
var modal = document.getElementById("myModal1");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("selfport");
var captionText = document.getElementById("caption1");
var paragraphText = document.getElementById("paragraph1");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    paragraphText.innerHTML = this.p;
}

//tombol tutup
var span= document.getElementsByClassName("close1")[0];

span.onclick = function() {
    modal.style.display = "none";
}
//gambar1 END






//gambar2
var modal = document.getElementById("myModal2");

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("spcbi");
var captionText = document.getElementById("caption2");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//tombol tutup
var span= document.getElementsByClassName("close2")[0];

span.onclick = function() {
    modal.style.display = "none";
}
//gambar 2 END






//gambar 3
var modal = document.getElementById("myModal3"); 

var img = document.getElementById("myImg3");
var modalImg = document.getElementById("strboenstr0");
var captionText = document.getElementById("caption3");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//tombol tutup
var span= document.getElementsByClassName("close3")[0];

span.onclick = function() {
    modal.style.display = "none";
}
//gambar3 END








