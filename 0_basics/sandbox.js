// making alerts
// alert('hello world');

// writing to console
console.log(1);
console.log(2);

// variables
// rules, cant start with number, no spaces etc
let age = 25;
console.log(age);

let year = 2019;
console.log(age,year);

// updating variables, just redefine, no let
year = 2021;
age = 32;
console.log(age,year);

// constant variables
const points = 100;
console.log(points);

// old variables
var score = 75;
console.log(score);

// data types
// 1 - strings ////////////
console.log("hello");

// 2 - sting concatenation
let mystring = "hello" + " " + "world";
console.log(mystring);

// 3 - getting charaacters
console.log(mystring[0]);

// 4 - string length
console.log(mystring.length);

// 5 - string method
console.log(mystring.toUpperCase());
let result_0 = mystring.toUpperCase();
let result_1 = mystring.toLowerCase();
console.log(result_0, result_1);

// getting chars
console.log(mystring.indexOf('o'));
let email = 'karimdaw91@gmail.com';
let result = email.lastIndexOf("a");
console.log(result);

// slicing strings
result = email.slice(0,5);
console.log(result);

// subs strings
result = email.substr(4,10);
console.log(result);

result = email.replace('m', 'w');
console.log(result);

// 1 - Numbers ////////////
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// 2 - operators --- BIDMAS order or operations
console.log(10/2);
let answer = radius % 3; // remainder should be 1
console.log(answer);

answer = pi * radius**2; // formula for circle
console.log(answer.toString() + " " + "is the area of a circle");

let likes = 10;
// adding 1
likes++;
console.log(likes);
// short hand notation for adding or whatever 
console.log(likes+=10);

// NaN - not a number
 console.log(5/ 'hello');

 // concatenating numbers
 answer = 'the blog has ' + likes + ' likes';
 console.log(answer);

 // template strings
 const title = "best reads of 2019";
 const author = 'Mario';
 const myLikes = 30;

 // concat way
 let bigString = 'The blog called ' + title + ' by ' + author + ' has ' + myLikes + ' likes';
 console.log(bigString);

 // template way - use back ticks ->>> ``
 let betterString = `The blog called ${title} by ${author} has ${myLikes} likes`;
 console.log(betterString);

 // creating html templates - good for injecting dynamic content recieved from e.g DB
 let html = `
    <h2>${title}</h2
    <p>By ${author}</p>
    <span>This blog has ${likes} likes </span>
 `;
console.log(html);


// 1 - Arrays ////////////
let ninjas = ['karim', 'cherine', 'ibrahim'];
console.log(ninjas);

console.log(ninjas[0]);
console.log(ninjas[1]);
console.log(ninjas[2]);

// overriding stuff in arrays
ninjas[1] = "amr";
console.log(ninjas);

let ages = [20,25,24,21];
let random = ['amr', 5 , 'steve', 13.444];
console.log(random);

// array methods
// get length
console.log(random.length);

// join string
let joinedString = ninjas.join(',');
console.log(joinedString);

// getting index of array value 
let nameIndex = ninjas.indexOf('amr');
let nameConcat = ninjas.concat(['ken','crystal']);
console.log(nameIndex);
console.log(nameConcat);
