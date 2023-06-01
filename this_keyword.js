const Person = {
    name : "Sam",
    //  sayName: function(){
    //     console.log(`The name of the 
    //     person is ${this.name}`)
    //  }
}
// Person.sayName()
//if the function called is outside the object
//then we use explicit binding 

function sayName(){
    console.log(`the name is ${this.name}`)
}
//the call is made as 
sayName.call(Person)