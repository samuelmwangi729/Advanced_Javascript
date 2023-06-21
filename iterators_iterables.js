let greeting = {
    [Symbol.iterator]: function(){
        let step = 0
        let iterator = {
            next:function(){
                step++
                if(step===1){
                    return{value :'Hello',done:false}
                }
                else if(step === 2){
                    return{value:'world',done:false}
                }
                return {value:undefined,done:true}
            }
        }
        return iterator
    }
}
for(g of greeting){
    console.log(g)
}