class Animal{
    constructor(animal,sound){
        this.animal=animal
        this.sound=sound
    }
    giveSound = () =>{
        return this
    }
}
class Dog extends Animal{
    constructor(animal,sound){
        super(animal,sound)
    }

    giveDetails = () =>{
        return `The animal is a ${this.animal} and it ${this.sound}'s` 
    }
}
let dog = new Dog('Dog','Bark')
console.log(dog.giveSound().sound)
console.log(dog.giveDetails())