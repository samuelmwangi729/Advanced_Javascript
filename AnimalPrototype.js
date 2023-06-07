function Animal(AnimalName, AnimalSound){
    this.animal = AnimalName
    this.sound=AnimalSound
}

//then call the function 
const Dog = new Animal('Dog','Bark')
const Cat = new Animal('Cat','Moew')
const Snake  =  new Animal("Snake","hiss")
Animal.prototype.getSound = function(){
    return `${this.animal} ${this.sound}s`
}
console.log(Snake.getSound())