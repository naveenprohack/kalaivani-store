window.addEventListener('DOMContentLoaded',function(){
    var nav_link = document.getElementById("nav-link");
    var logo = document.getElementById("logo");
    fa_brands = document.querySelectorAll('.fa-brands');
    var slideContainer = document.querySelector(".slideshow-container");
    var contactContainer = document.querySelector(".contect-container");
    var content = document.querySelectorAll(".services .service .content h4");
    console.log(content.length);
    contactContainer.style.right = "0px";
    contactContainer.style.transition = "0.7s";
    slideContainer.style.left = "0px";
    slideContainer.style.transition = ".7s"
    nav_link.style.right = "0px";
    nav_link.style.transition = ".7s"
    logo.style.left = "0px";
    logo.style.transition=".7s"
    showSlides();
    
})

var contents = {
    "Biometric":"fdsadamdff sdkfncf kfsad.,mf",
    "PC Building":"fdsadamdff sdkfncf kfsad.,mf",
    "Loptop service":"fdsadamdff sdkfncf kfsad.,mf",
    "CCTV Camara":"fdsadamdff sdkfncf kfsad.,mf",
    "Scanner":"fdsadamdff sdkfncf kfsad.,mf",
    "tiger":"fdsadamdff sdkfncf kfsad.,mf",
    "Mobile service":"fdsadamdff sdkfncf kfsad.,mf",
    "agdasd":"fdsadamdff sdkfncf kfsad.,mf"
}
// JavaScript for automatic sliding window

let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds (2000ms)
}

function content(){
    for(var i = 0;i<contents.length;i++){
        content.write = contents[i];
    }
}