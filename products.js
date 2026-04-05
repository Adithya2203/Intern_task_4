const products=[

{name:"Laptop",category:"electronics",price:55000},

{name:"Headphones",category:"electronics",price:3000},

{name:"Smart Watch",category:"gadgets",price:5000},

{name:"Bluetooth Speaker",category:"gadgets",price:2000},

{name:"Novel Book",category:"books",price:500},

{name:"Programming Book",category:"books",price:1200}

]

const container=document.getElementById("productContainer")

const categoryFilter=document.getElementById("categoryFilter")

const sortPrice=document.getElementById("sortPrice")

function displayProducts(list){

container.innerHTML=""

list.forEach(p=>{

let card=document.createElement("div")

card.className="product"

card.innerHTML=`

<h3>${p.name}</h3>

<p>Category : ${p.category}</p>

<h4>₹${p.price}</h4>

`

container.appendChild(card)

})

}

function filterProducts(){

let category=categoryFilter.value

let sort=sortPrice.value

let filtered=[...products]

if(category!=="all"){

filtered=filtered.filter(p=>p.category===category)

}

if(sort==="low"){

filtered.sort((a,b)=>a.price-b.price)

}else{

filtered.sort((a,b)=>b.price-a.price)

}

displayProducts(filtered)

}

categoryFilter.addEventListener("change",filterProducts)

sortPrice.addEventListener("change",filterProducts)

displayProducts(products)