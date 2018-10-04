$(document).foundation()

// Get the modal
var modal = document.querySelector('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('#myImg');
var img2 = document.querySelector('#myImg2');
var img3 = document.querySelector('#myImg3');
var img4 = document.querySelector('#myImg4');
var img5 = document.querySelector('#myImg5');
var img6 = document.querySelector('#myImg6');
var modalImg = document.querySelector("#img01");
var images = document.querySelectorAll('.img');

function swapImage(e) {
    modal.style.display = "block";
    modalImg.src = e.target.src;

};

for(i=0; i<images.length; i++){
    images[i].addEventListener('click',swapImage,false);
};



// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];

// When the user clicks on <span> (x), close the modal

function closeBox(){
    modal.style.display = "none";
};

span.addEventListener('click',closeBox,false);


