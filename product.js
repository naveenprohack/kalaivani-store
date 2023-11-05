window.addEventListener('DOMContentLoaded',function(){
    var catogaries = document.querySelector(".catogaries");
    var productTemplate = document.querySelector(".product");
    var products_container = document.querySelector(".products");
    catogaries.style.top = "20px";
    catogaries.style.transition = "0.7s";
    
  products.forEach(product=>{
    const templateClone = productTemplate.cloneNode(true)
    document.querySelector('.name').textContent = product.name;
    document.querySelector('.description').textContent=product.description;
    document.querySelector('.old-price').textContent=product.old;
    document.querySelector('.new-price').textContent=product.price;
    products_container.appendChild(templateClone);
    
  })
})

const products = [
    {
      name: "Mouse",
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


