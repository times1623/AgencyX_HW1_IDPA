$(document).foundation()

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/img1.png";
}

//handle click for myImg2
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/img2.png";
}

//handle click for myImg3
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/img3.png";
}
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/img4.png";
}

//handle click for myImg2
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/img5.jpg";
}

//handle click for myImg3
img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/img6.png";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}