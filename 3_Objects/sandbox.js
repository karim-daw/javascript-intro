// Object literals


// creating an array of objects
const blogs =[
   { title: 'why mac and cheese rules', likes: 30 },
   { title: ' ten things to make with marmite', likes: 50 }
];

// console.log(blogs)



// this is a key value pair, 
let user = {
   name: 'crystal',
   age: 30,
   email: 'karimdaw91@gmail.com',
   location: 'berlin',
   blogs: [
      { title: 'why mac and cheese rules', likes: 30 },
      { title: ' ten things to make with marmite', likes: 50 }
   ],
   login: function(){
      console.log('user logged in');
   },
   logout: function(){
      console.log('user logged out');
   },
   logBlogs: function(){ // arrow functions would not work
 
      console.log('this user has written the following blogs:');
      // can use foreach here
      this.blogs.forEach(function(blog) {
         console.log(blog.title, blog.likes);
      })
   },
   logEnd(){ // this is a different way to write methods inside objects
      console.log('this is a different way to write regular funcitons as methods')
   }
};

// calling method in user object
user.login();
user.logBlogs();
user.logout();
// user.logEnd();

// // testing outputting properties
// console.log(user.age)
// console.log(user.name)

// // can update property
// user.age = 35;
// console.log(user.age)

// // can also use sqaure brackets
// console.log(user['location']);
// user['name'] = 'chun -li' // helpfull if you wanted to make a variable
// console.log(user.name)
// console.log(typeof user) // its of object type

// using Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.731;
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.round(area));
console.log(Math.trunc(area)); // takes just the first integer

// generate random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100)) // nice way to get random number 0 - 100


// primitive values 
let scoreOne = 50;
let scoreTwo = scoreOne;
// creates a copy and stores on stack
 console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`)

scoreOne = 100;
// creates a copy and stores on stack
 console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`)

// reference values

userOne = {
   name: 'ryu',
   age: 30
};
// this will change only object in the heap, both variables
// are pointing at same object in heap
userTwo = userOne;
userOne.age = 25
console.log(userOne, userTwo);

