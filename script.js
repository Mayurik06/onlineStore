let container = document.querySelector(".product-contain");
let product = "";
 var allProducts = [];
let cartCount=document.querySelector('.cart-count');
let addCartBtn=document.querySelector('.addCartBtn').addEventListener('click',()=>{
  window.location.href="cart.html";
})

 const initApp=()=>{
  fetch('product.json')
  .then(Response => Response.json())
  .then(data=>{
    allProducts=data;
    console.log(allProducts)
    addDataToHTML();
  })
}
initApp();

 function addDataToHTML(){
for (let i = 0; i <6; i++) {
  product =
    product +
    ` <div class="card flex-container">
 <img src=${allProducts[i].img} class="product-img">
    <p class="product-name">${allProducts[i].name}</p>
    <div class="price">
    <p class="discount">₹${allProducts[i].price.original_price}</p>
        <p class="original">₹${allProducts[i].price.dis_price}</p>
      </div>
</div>`;

  container.innerHTML = product;
}
 }



function updateCounter(){
  cartProduct=JSON.parse(localStorage.getItem("cartProducts")) ;
  console.log(cartProduct);
  cartCount.innerHTML=`(${cartProduct.length})`;
 
}
updateCounter();