// function decleration
// javascript will hosit it to the top, so we can use it below we use it
// could create bad habits of messy code where functions are defined lower than
// when they are invoked which can make code not readable
function greet()
{
   console.log("hello there");
}
// call

// function expression
// hoisting doesnt work with expressions. needs to be defined before its been invoked
// but this type of function writing forces good habits because they need ot be defined
// procedurally in order of its use
// below we use default inputs
const speak = function(name = 'steve', time = 'morning')
{
   console.log(`good ${time} ${name}`);
};

// passing in argument
speak('mario','night');
speak()

// const calcArea = function(radius)
// {
//    return 3.14 * radius**2;
// }; // dont forget semi colon!!!!

// arrow functions 
// this is alot shorter to write functions this way
const calcArea = (radius) => 3.14 * radius**2; 


const area = calcArea(5);
console.log(area);

const calcVol = function(iArea , height)
{
   return iArea * height
};

console.log(calcVol(area,10));
const arrowGreet = () => 'hello world';
console.log((arrowGreet()));


// using arrow functions for lengthy function
const bill = (products,tax) =>
{
   let total = 0;
   for(let i = 0; i < products.length; i++)
   {
      total += products[i] + products[i] * tax;
   }
   return total;
}
console.log(bill([10,15,30],0.2));



// callbacks and foreach
// another function to be passed into another function as an argument
const myFunc = (callBackFunc) => 
{
   // do something
   let value = 50;
   callBackFunc(value);
}

myFunc(value => 
{ 
   console.log(value);
});

let people = ['mario' , 'luigi', 'ryu', 'shaeun', 'chun-li'];

// can use index to get i
const logPerson = (person,index) => {
   console.log(`${index} - hello ${person}`);
}

// now pass the call back function from above
people.forEach(logPerson);



// get reference to the 'ul'
const ul = document.querySelector('.people'); // this is a css selector , will learn later
const newPeople = ['mario', 'luigi', 'bowser','wario','karim'];

let html = ``; // empty template string
people.forEach(person => {
   // create html template for each person
   html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html; // puts htmal we made into ul