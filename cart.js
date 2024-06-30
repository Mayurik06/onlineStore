let show=document.querySelector('.show');
let paymetSec=document.querySelector('.payment-section');
let originalPrice=0;
let disPrice=0;
let saving=0;
let emptyDiv=document.querySelector('.empty-msg-container');
let buyBtn=document.querySelector('.buy-btn');
let shopBtn=document.querySelector('.shop-btn');
shopBtn.addEventListener('click',()=>{
    window.location.href="store.html"
})

console.log(emptyDiv.classList)

let allProducts = JSON.parse(localStorage.getItem('allProducts'));
console.log(allProducts);

let cartProduct=JSON.parse(localStorage.getItem("cartProducts"));
console.log(cartProduct);
function renderCart(){

    if(cartProduct.length<=0){
        emptyDiv.classList.remove('hidden');
        buyBtn.classList.add('hidden');
        paymetSec.classList.add('hidden');
    }
    else{
 for(let i=0;i<cartProduct.length;i++){

let cartPro=`<div class="buy-pro">
 <img src=${cartProduct[i].img} alt="">
 <div>
 <p class="name">${cartProduct[i].name}</p>
 <div class="price">
 <p class="discount">₹${cartProduct[i].price.original_price}</p>
 <p class="original">₹${cartProduct[i].price.dis_price}</p>
 </div>
</div>
<div class="quantity">
<button class="btn quantity-btn decre" value=${cartProduct[i].id}>-</button><span>${cartProduct[i].quantity}</span><button class="btn quantity-btn incre" value=${cartProduct[i].id}>+</button>
</div>
<div><button value=${cartProduct[i].id} class="btn remove-btn">Remove</button></div>
 </div>`

show.innerHTML+=cartPro;
originalPrice+=parseFloat(cartProduct[i].price.original_price)
disPrice+=parseFloat(cartProduct[i].price.dis_price)
}
    }
console.log(originalPrice);
console.log(disPrice);
saving=originalPrice-disPrice;
console.log(saving);

paymentReceipt(originalPrice,disPrice,saving);
}

function paymentReceipt(original,dis,save){
    priceDetails=`<div class="price-details">
    <p class="pay-head">Price Details</p>
    <div class="flex-space">
    <p class="info">Original Price</p>
    <p class="info">₹${original}</p>
    </div>
    <div class="flex-space">
    <p class="info">Discount Price</p>
    <p class="info">₹${dis}</p>
    </div>
    <div class="flex-space">
    <p class="info">Delivery Charges</p>
    <p class="info">₹40 <span class="free">FREE</span></p>
    </div>
    
    <div class="flex-space pay-total">
    <p class="info total-pay">Total Payable</p>
    <p class="info total-pay">₹${dis}</p>
    </div>
    <div>
    <p class="statement">Your Total Savings on this order ₹${save} </p>
    </div>
    </div>`
    
    paymetSec.innerHTML=priceDetails;

}



 show.addEventListener('click',increase);

 function increase(e){
if(e.target.classList.contains('quantity-btn')){
let index=e.target.value;
console.log(index);

if(e.target.classList.contains('incre')){
increaseQuantity(index);
}
else if(e.target.classList.contains('decre')){
    decreaseQuantity(index);
}
 }
else if(e.target.classList.contains('remove-btn')){
    let index=e.target.value;
    console.log(index);
removePro(index);
    
}

location.reload(); 
}

function increaseQuantity(index){
    let pro=cartProduct.find(product=>product.id==index);
    let orPro=allProducts.find(product=>product.id==index);
    for(let i=0;i<cartProduct.length;i++){
        if(cartProduct[i].id==pro.id){
            cartProduct[i].quantity+=1;
            cartProduct[i].price.dis_price=cartProduct[i].price.dis_price+orPro.price.dis_price;
            cartProduct[i].price.original_price=cartProduct[i].price.original_price+orPro.price.original_price;
            localStorage.setItem('cartProducts',JSON.stringify(cartProduct));
    
        }
    console.log(cartProduct[i]);
    }
    console.log(pro);

}


function decreaseQuantity(index){
    let pro=cartProduct.find(product=>product.id==index);

    let orPro=allProducts.find(product=>product.id==index);
    for(let i=0;i<cartProduct.length;i++){
        if(cartProduct[i].id==pro.id && cartProduct[i].quantity > 1){
            cartProduct[i].quantity-=1;
            cartProduct[i].price.dis_price=cartProduct[i].price.dis_price-orPro.price.dis_price;
            cartProduct[i].price.original_price=cartProduct[i].price.original_price-orPro.price.original_price;
            localStorage.setItem('cartProducts',JSON.stringify(cartProduct));
        }
    }
}


function removePro(index){
let pro=cartProduct.find(product=>product.id==index);

console.log("pro.id="+pro.id);
for(let i=0;i<cartProduct.length;i++){
  if(cartProduct[i].id==pro.id){
    cartProduct.splice(i,1);
    localStorage.setItem('cartProducts',JSON.stringify(cartProduct));
  }
}

}



renderCart();