//callback

function greet(name,callback){
    callback();
}
greet("akshaya",()=>{
    console.log("hello");
})