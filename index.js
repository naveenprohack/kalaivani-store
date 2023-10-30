window.addEventListener('DOMContentLoaded',function(){
    var nav_link = document.getElementById("nav-link");
    var logo = document.getElementById("logo");
    fa_brands = document.querySelectorAll('.fa-brands');
    var slideContainer = document.querySelector(".slideshow-container");
    var contactContainer = document.querySelector(".contect-container");
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

document.addEventListener("DOMContentLoaded", function () {
     // Start the slideshow when the page loads
});
