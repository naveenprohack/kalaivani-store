window.addEventListener('DOMContentLoaded',function(){
    var nav_link = document.getElementById("nav-link");
    var logo = document.getElementById("logo");   
     var productTemplate = document.querySelector(".product");
    var products_container = document.querySelector(".products");
    var products_catogaries = document.querySelector(".product-catogaries");

    nav_link.style.right = "0px";
    nav_link.style.transition = ".7s"
    logo.style.left = "0px";
    logo.style.transition=".7s"
    products_catogaries.style.left = "0px";
    products_catogaries.style.transition=".7s"
    
//   products.forEach(product=>{
//     const templateClone = productTemplate.cloneNode(true);
//     document.querySelector('.name').textContent = product.name;
//     document.querySelector('.description').textContent=product.description;
//     document.querySelector('.old_price').textContent=product.old;
//     document.querySelector('.new_price').textContent=product.price;
//     products_container.appendChild(templateClone);
    
//   })
})

// Function to populate the product list

    // products.forEach(function(product) {
    //     const product_list = document.createElement("div");
    //     product_list.classList.add('product');
    //     product_list.innerHTML = `
        
    //     <div class="img">
    //         <img src="./images/dell_01.jpg" alt="">
    //     </div>
    //     <h2 class="name">${product.name}</h2>
    //     <p class="description">${product.description}</p>
    //        <div class="prices">
    //          <span class="old_price">${product.old}</span><h3 class="new_price">${product.new}</h3>
    //        </div>
    //        <span class="discount"></span>
    //        <button class="btn-fav">
    //         <i class="fa fa-heart"></i>
    //        </button>
    
    //     `;
    //     products_container.appendChild(product_lis);
    // });


const products = [
    {
      name: "Mouses",
      old:29.99,
      price: 19.99,
      description: "This is the first product.",
      category: "Electronics",
      inStock: true
    },
    {
      name: "Keyboard",
      old:29.99,
      price: 29.99,
      description: "This is the second product.",
      category: "Clothing",
      inStock: false
    },
    {
      name: "CPU",
      old:29.99,
      price: 9.99,
      description: "This is the third product.",
      category: "Home & Garden",
      inStock: true
    },
    {
      name: "Monitor",
      old:29.99,
      price: 49.99,
      description: "This is the fourth product.",
      category: "Electronics",
      inStock: true
    },
    {
      name: "Cable",
      old:29.99,
      price: 39.99,
      description: "This is the fifth product.",
      category: "Clothing",
      inStock: true
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
  
  // Accessing product details
 // Accessing the price of the second product


