$(document).foundation()

var modal = document.querySelector('#myModal');
var modalImg = document.querySelector("#img01");
var images = document.querySelectorAll('.portFolioImg');
var viewBut = document.querySelectorAll('button');

function swapImage(e) {
    modal.style.display = "block";


        if(e.target.id === "myBut"){
            modalImg.src = images[0].src;
        
        };
        if(e.target.id === "myBut2"){
            modalImg.src = images[1].src;
        
        };
        if(e.target.id === "myBut3"){
            modalImg.src = images[2].src;
        
        };
        if(e.target.id === "myBut4"){
            modalImg.src = images[3].src;
        
        };
        if(e.target.id === "myBut5"){
            modalImg.src = images[4].src;
        
        };
        if(e.target.id === "myBut6"){
            modalImg.src = images[5].src;
        
        };

        
        



        

};

for(i=0; i<images.length; i++){
    viewBut[i].addEventListener('click',swapImage,false);
};

var span = document.querySelectorAll(".close")[0];

function closeBox(){
    modal.style.display = "none";
};

span.addEventListener('click',closeBox,false);

const zhiqingInfo = document.querySelector('#descInfo').querySelector('p');
const leeInfo = document.querySelector('#leeDesc').querySelector('p');

function setMemberInfo(data){
    zhiqingInfo.textContent = data.memberwords[0];
    leeInfo.textContent = data.memberwords[1];
}

setMemberInfo(memberData);


