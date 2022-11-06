// these are the more tradiational ways of writing class

// class Human{
//    constructor () {
//       this.gender = 'male'
//    }

//    printGender () {
//       console.log(this.gender)
//    }

// }

// class Person extends Human {
//    constructor() {
//       super()
//       this.name = 'Max'
//    }
//       printGender () {
//       console.log(this.gender)
//    }
//       printName () {
//       console.log(this.name)
//    }
// }


// this is the more modern way of writing classes
class Human{
      gender = 'male'

   printGender = () => {
      console.log(this.gender)
   }
}

class Person extends Human {
      name = 'Max'
   
   printName = () => {
      console.log( this.name )
   }
}


const person = new Person()
person.printGender()
person.printName()


