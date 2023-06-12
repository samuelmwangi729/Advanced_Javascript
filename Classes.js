class Dog{
    constructor(dName,dSound){
        this.dogName=dName
        this.dogSound=dSound
    }

    giveDetails = () =>{
        return `The dog's name is ${this.dogName} and it ${this.dogSound}'s`
    }
}

let dog= new Dog('Sam','Bark')
console.log(dog.giveDetails())