function * generator(){
    yield("Hello")
    yield("world")
}
let gen = generator()
for(g of gen){
    console.log(g)
}