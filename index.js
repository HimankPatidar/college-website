let imageE1 = 0;

function ImageSlider(x){
    imageE1 = imageE1 + x;
    slideshow(imageE1);
}

slideshow(imageE1);


function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        imageE1 = 0;
        num = 0; 
    }
    if( num < 0){
        imageE1 = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = "none"
    }

 slides[num].style.display ="block";

}