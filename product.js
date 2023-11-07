window.addEventListener('DOMContentLoaded',function(){
    var nav_link = document.getElementById("nav-link");
    var logo = document.getElementById("logo");   
     var productTemplate = document.querySelector(".product");
    var products_container = document.querySelector(".products");
    var products_catogaries = document.querySelector(".product-catogaries");
    var keyboard = document.getElementById("keyboard");
    const selectedValue = document.querySelector('input[name="select"]:checked');
    nav_link.style.right = "0px";
    nav_link.style.transition = ".7s"
    logo.style.left = "0px";
    logo.style.transition=".7s"
    products_catogaries.style.left = "0px";
    products_catogaries.style.transition=".7s"
    products.forEach(product=>{
      const demo_product = productTemplate.cloneNode(true);
      demo_product.querySelector('#name').innerHTML = product.name;
      demo_product.querySelector('#description').innerHTML = product.description;
      demo_product.querySelector('#old_price').innerHTMl = product.old;
      demo_product.querySelector('#new_price').innerHTML = product.price;
      demo_product.querySelector('.discount').innerHTML = product.discount;
      demo_product.querySelector("#product-image").src = product.URL;
    
      products_container.appendChild(demo_product);
    })
})
const products = [
    { id:1,
      name: "Dell keyboard ",
      old:29.99,
      price: 19.99,
      description: "G20.",
      category: "Electronics",
      discount:"70%",      
      inStock: true,     
      URL:"./images/keyboard/dell_keyboard_01.jpg"

    },
    { id:2,
      name: "asus",
      old:29.99,
      price: 29.99,
      description: "This is the second product.",
      category: "Clothing",
      inStock: false,
      discount:"70%",      
      URL:"./images/keyboard/dell_keyboard_02.jpg"

    },
    { id:3,
      name: "CPU",
      old:29.99,
      price: 9.99,
      description: "This is the third product.",
      category: "Home & Garden",
      inStock: true,      
      URL:"./images/keyboard/dell_keyboard_01.jpg"

    },
    { id:4,
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      inStock: true,      
      URL:"./images/vk.png"

    },
    { id:5,
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the fifth product.",
      category: "Clothing",
      inStock: true,
      URL:"./images/vk.png"

    },
    { id:6,
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the sixth product.",
      category: "Clothing",
      inStock: true,
      URL:"./images/01.jpg"
    },
    { id:7,
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the sixth product.",
      category: "Clothing",
      inStock: true,
      URL:"./images/01.jpg"
    },
    { id:8,
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      inStock: true,        discount:"70%",          
      URL:"./images/vk.png"

    },
    { id:9,
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      discount:"70%",      
      URL:"./images/vk.png"

    },
    { id:10,
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      discount:"70%",      
      inStock: true,      
      URL:"./images/vk.png"

    }
  ];
  const keyboard_products = [
    { id:1,
      name: "Dell keyboard ",
      old:29.99,
      price: 19.99,
      description: "G20.",
      category: "Electronics",
      inStock: true,     
      URL:"./images/keyboard/dell_keyboard_01.jpg"

    },
    { id:2,
      name: "Keyboard",
      old:29.99,
      price: 29.99,
      description: "This is the second product.",
      category: "Clothing",
      inStock: false,
      URL:"./images/keyboard/dell_keyboard_02.jpg"

    },
    { id:3,
      name: "CPU",
      old:29.99,
      price: 9.99,
      description: "This is the third product.",
      category: "Home & Garden",
      inStock: true,      
      URL:"./images/keyboard/dell_keyboard_01.jpg"

    },
    { id:4,
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      inStock: true,      
      URL:"./images/vk.png"

    },
    { id:5,
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the fifth product.",
      category: "Clothing",
      inStock: true,
      URL:"./images/vk.png"

    },
    { id:6,
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the sixth product.",
      category: "Clothing",
      inStock: true,
      URL:"./images/01.jpg"
    }
  ];
    const count = 0;
    var heart = document.querySelector('.btn-fav');
    heart.addEventListener('click',()=>{
      if(heart.style.color != "skyblue"){
      heart.style.color = "skyblue";
      count++;
      }
      else{
        heart.style.color = "white";
        count--;
      }
    })
  



