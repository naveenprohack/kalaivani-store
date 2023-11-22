window.addEventListener('DOMContentLoaded',function(){
    var nav_link = document.getElementById("nav-link");
    var logo = document.getElementById("logo");
    fa_brands = document.querySelectorAll('.fa-brands');
    var slideContainer = document.querySelector(".slideshow-container");
    var contactContainer = document.querySelector(".contect-container");
    var service_container = this.document.querySelector(".services");
    var serviceTemplate = this.document.querySelector(".service");
    
    console.log(content.length);
    contactContainer.style.right = "0px";
    contactContainer.style.transition = "0.7s";
    slideContainer.style.left = "0px";
    slideContainer.style.transition = ".7s";
    nav_link.style.right = "0px";
    nav_link.style.transition = ".7s";
    logo.style.left = "0px";
    logo.style.transition="1.5s";
    
    showSlides();
    services.forEach(service=>{
        const service_clone = serviceTemplate.cloneNode(true);
        service_clone.querySelector('.heading').innerHTML = service.name;
        service_clone.querySelector('#service-img').src = service.url;
        service_clone.querySelector('.dis').innerHTML = service.dis;
        console.log(service_clone);
        service_container.appendChild(service_clone);
    })
})
var menu = this.document.getElementById('burger');
menu.addEventListener('click',()=>{
  nav_link.style.display = "block";
})
const services = [
  {
    id:1,
    name:'Hardware repair',
    url:"./images/vk.png",
    dis:'jkasf ndlsf. dflm,.d'
  },
  {
    id:2,
    name:'Software development',
    url:"./images/networking.jpg",
    dis:'jkasf ndlsf. dflm,.d'

  },
  {
    id:3,
    name:'PC Building',
    url:"./images/system.jpg",
    dis:'Computer hardware'

  },
  {
    id:4,
    name:'CCTV camara Fixing',
    url:"./images/cctv.jpg",
    dis:'jkasf ndlsf. dflm,.d'

  },
  {
    id:5,
    name:'Electronic Product',
    url:"./images/sale.png",
    dis:'jkasf ndlsf. dflm,.d'

  },
  {
    id:6,
    name:'Bio Metric Fixing',
    url:"./images/biometric_avator.jpg",
    dis:'jkasf ndlsf. dflm,.d'

  }



];
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

    setTimeout(showSlides, 3000); // Change image every 2 seconds (2000ms)
}

function content(){
    for(var i = 0;i<contents.length;i++){
        content.write = contents[i];
    }
}
const keyboard_products = [
    { id:1,
      name: "hardware repair ",
      description:"lorem m..fd.m f.msadfm",
      url:"./images/keyboard/dell_keyboard_01.jpg"

    },
    { id:2,
      name: "Keyboard",
      old:29.99,
      price: 29.99,
      description: "This is the second product.",
      category: "Clothing",
      inStock: false,
      url:"./images/keyboard/dell_keyboard_02.jpg"

    },
    { id:3,
      name: "CPU",
      old:29.99,
      price: 9.99,
      description: "This is the third product.",
      category: "Home & Garden",
      inStock: true,      
      url:"./images/keyboard/dell_keyboard_01.jpg"

    },
    { id:4,
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      inStock: true,      
      url:"./images/vk.png"

    },
    { id:5,
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the fifth product.",
      category: "Clothing",
      inStock: true,
      url:"./images/vk.png"

    }];
    
    function PopUp(){
      var popup = this.document.getElementById("mview-nav-link");
      if(popup.style.display === "block"){
        popup.style.display = "none"
        popup.style.transition = "2s"
      }
      else{
        popup.style.display = "block"
      
      }
    }
    