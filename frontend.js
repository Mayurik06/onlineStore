let pContain = document.querySelector(".product-container");
let pro = "";
let cart = document.querySelector(".cart-count");
let addCartBtn=document.querySelector('.addCartBtn');
let sidebar=document.querySelector('.sidebar');
let allProducts = [];
let count = 0;
cart.innerHTML = `(${count})`;
let cartProduct = [];
let showPro = "";
let id;
let totalPrice = 0;
let price=0;
let showCart = document.querySelector(".display-cart");
let tPRice=document.querySelector('.t-price');
let remove;
let cartMsg=document.querySelector('.cart-msg');
let cal=document.querySelector('.calculate');
let cross=document.querySelector('.cross');

function addDataToHTML() {
  for (let i = 0; i < allProducts.length; i++) {
    pro =
      pro +
      ` <div class="card flex-container">
 <img src=${allProducts[i].img} class="product-img">
    <p class="product-name">${allProducts[i].name}</p>
    <div class="price">
    <p class="discount">₹${allProducts[i].price.original_price}</p>
        <p class="original">₹${allProducts[i].price.dis_price}</p>
      </div>
      <div class="flex-space">
      <button class="cart-btn notadded" value=${allProducts[i].id}>Add Cart</button>
      <button class="buy-btn">Buy</button>
      </div>
</div>`;
    pContain.innerHTML = pro;
  }
}
const initApp = () => {
  fetch("product.json")
    .then((Response) => Response.json())
    .then((data) => {
      allProducts = data;
      console.log(allProducts);
      addDataToHTML();
    });
};
initApp();

pContain.addEventListener("click", addCart);

function addCart(e) {
  if (e.target.classList.contains("notadded")) {
      //to hide and show sidebar
      sidebar.classList.remove('active');
cartMsg.classList.add('active');
cal.classList.remove('active');
      console.log(e.target.innerHTML);
      count++;
      cart.innerHTML = `(${count})`;
      console.log(cart.innerHTML);

      //to show product
      console.log(e.target.value); 
      id = e.target.value;
      cartHTML(id);
    }
  }

function cartHTML(val) {
  cartProduct.push({
    productId: val,
    name: allProducts[val].name,
    img: allProducts[val].img,
    price: allProducts[val].price.dis_price,
  });
  console.log(cartProduct);

  for (let i = 0; i < cartProduct.length; i++) {
    showPro= ` <div class="cart-pro">
     <img src=${cartProduct[i].img} alt="">
     <p class="name">${cartProduct[i].name}</p>
     <p>${cartProduct[i].price}</p>
     <button class="remove" value=${i}>Remove</button>
     </div>`;
     price=cartProduct[i].price;
 
  }

  showCart.innerHTML+=showPro;
  // price=document.querySelector('.price');
  console.log(price);
countTotal();
}


function countTotal(){
totalPrice+=price;
console.log(totalPrice);
tPRice.innerHTML=`₹${totalPrice}`;
}

showCart.addEventListener('click',removeP);

function removeP(e){
if(e.target.classList.contains('remove')){
console.log(e.target.value);
e.target.parentElement.style.display='none';
cartProduct.splice(e.target.value);
let j=e.target.previousElementSibling.innerText;
totalPrice-=j;
tPRice.innerHTML=`₹${totalPrice}`;
count--;
cart.innerHTML = `(${count})`;
if(totalPrice==0){
  cal.classList.add('active');
  cartMsg.classList.remove('active');
}
}
}

addCartBtn.addEventListener('click',cartVisibility)

function cartVisibility(){
sidebar.classList.remove('active');
}

cross.addEventListener('click',sidebarVis)

function sidebarVis(){
  sidebar.classList.add('active');
}