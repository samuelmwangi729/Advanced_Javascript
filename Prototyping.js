function Person(fName,lName){
    this.firstName = fName,
    this.lastName = lName
}

const p1 = new Person('sam','sam2')
const p2 = new Person('sam2','sam23')
p1.prototype.getFullName = ()=>{
    return `${this.firstName} ${this.lastName}`
}
console.log(p2.getFullName())