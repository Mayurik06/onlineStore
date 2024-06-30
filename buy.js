
let show=document.querySelector('.show');
let paymetSec=document.querySelector('.payment-section');
let showBuyPro="";

let priceDetails="";



const productName=localStorage.getItem('proName');
const productImg=localStorage.getItem('proImg');
const productPrice=localStorage.getItem('proDisPrice');
const originalPrice=localStorage.getItem('proOriginalPrice');
let saving=parseInt(originalPrice)-parseInt(productPrice);

showBuyPro=`<div class="buy-pro">
 <img src=${productImg} alt="">
 <div>
 <p class="name">${productName}</p>
 <div class="price">
 <p class="discount">₹${originalPrice}</p>
 <p class="original">₹${productPrice}</p>
 </div>
</div>
<div>
<p>Delivery By date Apr 6</p>
</div>
 </div>`;

show.innerHTML = showBuyPro;

priceDetails=`<div class="price-details">
<p class="pay-head">Price Details</p>
<div class="flex-space">
<p class="info">Original Price</p>
<p class="info">₹${originalPrice}</p>
</div>
<div class="flex-space">
<p class="info">Discount Price</p>
<p class="info">₹${productPrice}</p>
</div>
<div class="flex-space">
<p class="info">Delivery Charges</p>
<p class="info">₹40 <span class="free">FREE</span></p>
</div>

<div class="flex-space pay-total">
<p class="info total-pay">Total Payable</p>
<p class="info total-pay">₹${productPrice}</p>
</div>
<div>
<p class="statement">Your Total Savings on this order ₹${saving} </p>
</div>
</div>`

paymetSec.innerHTML=priceDetails;