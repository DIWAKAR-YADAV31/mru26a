//closure inner function remembers outer variables
// function outer(){
//     let n=0
//     function inner(){
//         return n++
//     }
//     return inner
// }

// const f=outer();
// console.log(f())



function outer(){
    let password="1234"
    function inner(pwd){
        if(pwd===password){
            return "valid"
        }
        else{
           return "invalid"
        }
    }
    return inner
}
const chkpassword=outer()
console.log(chkpassword("abcd"))