sum = (a,b,c) => a+b+c
curry = fn =>{
 return function(a){
    return function(b){
        return function(c){
            return fn(a,b,c)
        }
    }
 }   
}
let curriedSum = curry(sum)
// console.log(curriedSum(1)(2)(3)) 
let add1=curriedSum(1)
let add2=add1(2)
let add3 = add2(3)
console.log(add3)