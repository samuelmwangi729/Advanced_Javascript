function Person(fName,lName){
    this.firstName = fName,
    this.lastName = lName
}

const p1 = new Person('sam','sam2')
const p2 = new Person('sam2','sam23')
Person.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`
}
function SuperHero (fName, lName) {
    this.isSuperHero = true
    Person.call(this,fName,lName)

}
SuperHero.prototype = Object.create(Person.prototype)
//prototype inheritance 
SuperHero.prototype.fightCrime = function(){
    return `is fighting crime`
}
const Batman = new SuperHero('sam','batman')
console.log(`the superhero ${Batman.getFullName()} ${Batman.fightCrime()}` )