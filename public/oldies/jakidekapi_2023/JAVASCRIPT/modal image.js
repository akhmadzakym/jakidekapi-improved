window.onload = function(){

//DIGITAL ART
//gambar 1
var modal = document.getElementById("myModal1");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("selfport");
var captionText = document.getElementById("caption1");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;    
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

//gambar 4
var modal = document.getElementById("myModal4");
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("strboenstr01")
var captionText = document.getElementById("caption4");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close4")[0];

span.onclick = function() {
    modal.style.display = "none";
}
//gambar4 end

//gambar 5

var modal = document. getElementById("myModal5");
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("untitledsomething");

var captionText = document.getElementById("caption5");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close5")[0];

span.onclick = function() {
    modal.style.display = "none";
}
//gambar5 end
var modal = document.getElementById("myModal6");
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("oc_toby");

var captionText = document.getElementById("caption6");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}



var span = document.getElementsByClassName("close6")[0];

span.onclick = function() {
    modal.style.display = "none";
}

//gambar6 end


//gambar7
var modal = document.getElementById("myModal7");
var img = document.getElementById("myImg7");
var modalImg = document.getElementById("untitled189");

var captionText = document.getElementById("caption7");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close7")[0];

span.onclick = function () {
    modal.style.display = "none";
}

//gambar7 end

var modal = document.getElementById("myModal8");
var img = document.getElementById("myImg8");
var modalImg = document.getElementById("untitled190");

var captionText = document.getElementById("caption8");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close8")[0];

span.onclick = function () {
    modal.style.display = "none";
}

}
