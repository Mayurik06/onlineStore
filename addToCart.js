let productContainer=document.querySelector('.product-container');
let allProducts=[];
let pro="";
let cartProduct=[];
let cartCount=document.querySelector('.cart-count');
let fetchCart;
let addCartBtn=document.querySelector('.addCartBtn');


//fetch product.json

const initApp=()=>{
    fetch('product.json')
    .then((Response=>Response.json()))
    .then((data)=>{
        allProducts=data;
        console.log(allProducts);
        addDataToHTML();
        localStorage.setItem('allProducts', JSON.stringify(allProducts)); 
    })
}
initApp();


//to print all products to the store page
function addDataToHTML() {
    for (let i = 0; i < allProducts.length; i++) {
      pro =pro +
        ` <div class="card flex-container">
   <img src=${allProducts[i].img} class="product-img">
      <p class="product-name">${allProducts[i].name}</p>
      <div class="price">
      <p class="discount">₹${allProducts[i].price.original_price}</p>
          <p class="original">₹${allProducts[i].price.dis_price}</p>
        </div>
        <div class="flex-space">
        <button class="cart-btn notadded" value=${allProducts[i].id}>Add Cart</button>
        <button class="buy-btn" value=${allProducts[i].id}>Buy</button>
        </div>
  </div>`;
  productContainer.innerHTML = pro;
    }
  }
  
//Addto cart
productContainer.addEventListener('click',addCart);

function addCart(e){
if(e.target.classList.contains('cart-btn')){ 
   
   let pro=e.target.value;
   cartProduct=JSON.parse(localStorage.getItem("cartProducts")) ?? [];
    let cartPRo=allProducts.find(product=>product.id==pro);
    if(cartProduct.some(product=>product.id==pro)){
        alert("Product already in the cart");
    }else{
  cartProduct.push(cartPRo);
  
localStorage.setItem('cartProducts',JSON.stringify(cartProduct));
console.log(cartProduct);
 
updateCounter();
document.location.href="cart.html"
}
}
}
//update the cartcount
function updateCounter(){
    cartProduct=JSON.parse(localStorage.getItem("cartProducts")) ;
    console.log(cartProduct);
    cartCount.innerHTML=`(${cartProduct.length})`;
   
}

addCartBtn.addEventListener('click',()=>{
    document.location.href="cart.html"
})

//buy product
productContainer.addEventListener('click',buyProduct);

function buyProduct(e){
if(e.target.classList.contains('buy-btn')){
  let index=e.target.value;

  let buyPro=allProducts.find(product=>product.id==index);
  console.log(buyPro);
localStorage.setItem('proName',buyPro.name) ;
localStorage.setItem('proImg',buyPro.img) ;
localStorage.setItem('proOriginalPrice',buyPro.price.original_price) ;
localStorage.setItem('proDisPrice',buyPro.price.dis_price) ;
window.location.href="buy.html";
}
}




updateCounter();