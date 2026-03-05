const stock=[
    {name:"wipro",lastprice:200,currprice:250},
    {name:"hdfc",lastprice:200,currprice:290},
];
function calc(obj){
    obj.growth=obj.currprice-obj.lastprice;
    obj.growthper=(obj.growth*100)/obj.lastprice;
    console.log(obj);
}
calc(stock[0])
calc(stock[1]);