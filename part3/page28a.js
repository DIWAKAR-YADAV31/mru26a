const products=[
    {id:1,name:"product1",price:25},
    {id:2,name:"product2",price:50},
    {id:3,name:"product3",price:48},
];

function displayproducts(){
products.forEach((product)=>{
    console.log(product);
})
}


const array=products.filter((product)=>product.price>40)
    console.group(array);

displayproducts()
