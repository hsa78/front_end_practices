
const imgNum = 4;
const imgs = ["img1.jpeg","img2.jpg","img3.jpeg","img4.jpg"];
var p = 0;

var imageBoxElem = document.getElementsByClassName('image-box');
var imageIndexElem = document.getElementById('image-index');
var bottomSideBarElem = document.getElementById('bottom-image-bar');

for(var i = 0; i < imgNum; i++){
    bottomSideBarElem.innerHTML += "<div class = \"circle\" id = \"" + i.toString() + "\"></div>";
}

var circleElems = document.getElementsByClassName('circle');
circleElems[p].style.backgroundColor = "gray";

imageBoxElem[0].style.backgroundImage = "URL("+imgs[p]+")";
// imageBoxElem.style.animationPlayState = "running";
// setTimeout(function(){imageBoxElem.style.animationPlayState = "paused"},2000);


imageIndexElem.innerHTML = (p + 1).toString() +" / "+imgNum.toString();


var nextBtn = document.getElementById('next');
var previousBtn = document.getElementById('previous');

nextBtn.addEventListener("click",function(event){goToNextPic();});
previousBtn.addEventListener("click",function(event){goToPreviousPic();});

function goToNextPic(){
    circleElems[p].style.backgroundColor = "white"; 
    p = ( p + 1 ) % imgNum;
    document.querySelector(".image-box").className = "image-box";
    circleElems[p].style.backgroundColor = "gray";
    imageBoxElem[0].style.backgroundImage = "URL(" + imgs[p] + ")";
    imageIndexElem.innerHTML = (p + 1).toString() +" / "+imgNum.toString();
    
    
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            document.querySelector(".image-box").className = "image-box fade";
        })
    })
}

function goToPreviousPic(){
    document.querySelector(".image-box").className = "image-box";    
    circleElems[p].style.backgroundColor = "white";
    p = ( p + (imgNum - 1) ) % imgNum;
    circleElems[p].style.backgroundColor = "gray";
    imageBoxElem[0].style.backgroundImage = "URL(" + imgs[p] + ")";
    imageIndexElem.innerHTML = (p + 1).toString() +" / "+imgNum.toString();

    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            document.querySelector(".image-box").className = "image-box fade";
        })
    })
}


function showSlide(elem){
    document.querySelector(".image-box").className = "image-box";    
    for(element of document.getElementsByClassName('circle')){
        element.style.backgroundColor = "white";

    }
    p = Number(elem.id);
    console.log(p);
    elem.style.backgroundColor = "gray";
    imageBoxElem[0].style.backgroundImage = "URL(" + imgs[p] + ")";
    imageIndexElem.innerHTML = (p + 1).toString() +" / "+imgNum.toString();

    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            document.querySelector(".image-box").className = "image-box fade";
        })
    })
}

for(var i = 0; i < imgNum; i++){
    var bg = circleElems[i].style.backgroundColor;
    
    circleElems[i].addEventListener('mouseenter',function(){
        this.style.backgroundColor = "gray";
    })

    circleElems[i].addEventListener('mouseleave',function(){
        if(circleElems[p] === this){
            this.style.backgroundColor = "gray";
        }
        else{
            this.style.backgroundColor = "white";
        }
        
    })

    circleElems[i].addEventListener('click',function(){
        showSlide(this);
    })
}
