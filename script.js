let container=document.querySelector('.product-contain');
let product="";
let allProducts=[
    {name:'Peperomia Caperata',
img:"images/plant-1.jpg",
price:{
    original_price:450,
    dis_price:350
}},

{
name:'House Shape Close',
img:"images/plant-two.jpg",
price:{original_price:500,
dis_price:400}
},

{
 name:"Zantedeschia Calla",
 img:"images/plant-3.jpg",
 price:{original_price:600,
dis_price:450}  
},

{
    name:"Maranta Leuconeura",
    img:"images/plant-4.jpg",
    price:{original_price:600,
   dis_price:200}  
   },

   {
    name:"Polyscias Fabian",
    img:"images/plant-5.jpg",
    price:{original_price:700,
   dis_price:350}  
   },

   {
    name:"Sansevieria Trifasciata",
    img:"images/plant-6.jpg",
    price:{original_price:700,
   dis_price:350}  
   },

   {
    name:"Maidenhair Fern",
    img:"images/plant-7.jpg",
    price:{original_price:700,
   dis_price:350}  
   },

   {
    name:"Chakra Crystal Healing",
    img:"images/plant-8.jpg",
    price:{original_price:700,
   dis_price:350}  
   },
   {
    name:"Queen Aglaonema",
    img:"images/plant-9.jpg",
    price:{original_price:700,
   dis_price:350}  
   },
   {
    name:"Bansai Ficus Ginseng",
    img:"images/plant-10.jpg",
    price:{original_price:800,
   dis_price:450}  
   },
]

for(let i=0;i<allProducts.length;i++){
    product=product+` <div class="card flex-container">
 <img src=${allProducts[i].img} class="product-img">
    <p class="product-name">${allProducts[i].name}</p>
    <div class="price">
    <p class="discount">₹${allProducts[i].price.original_price}</p>
        <p class="original">₹${allProducts[i].price.dis_price}</p>
      </div>
      <div class="flex-space">
      <button class="cart-btn">Add Cart</button>
      <button class="buy-btn">Buy</button>
      </div>
</div>`;


container.innerHTML=product;
}