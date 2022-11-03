class Human{
   constructor () {
      this.gender = 'male'
   }

   printGender () {
      console.log(this.gender)
   }

}


class Person extends Human {
   constructor() {
      super()
      this.name = 'Max'
   }
      printGender () {
      console.log(this.gender)
   }
      printName () {
      console.log(this.name)
   }
}

const person = new Person()
person.printGender()
person.printName()