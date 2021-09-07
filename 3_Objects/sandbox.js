// Object literals

// this is a key value pair, 
let user = {
   name: 'crystal',
   age: 30,
   email: 'karimdaw91@gmail.com',
   location: 'berlin',
   blogs: ['why mac and cheese rules', '10 things to make with marmite']
};

console.log(user.age)
console.log(user.name)

// can update property
user.age = 35;
console.log(user.age)

// can also use sqaure brackets
console.log(user['location']);
user['name'] = 'chun -li' // helpfull if you wanted to make a variable
console.log(user.name)
console.log(typeof user) // its of object type

