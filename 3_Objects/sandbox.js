// Object literals

// this is a key value pair, 
let user = {
   name: 'crystal',
   age: 30,
   email: 'karimdaw91@gmail.com',
   location: 'berlin',
   blogs: ['why mac and cheese rules', '10 things to make with marmite'],
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
         console.log(blog);
      })
   },
   logEnd(){ // this is a different way to write methods inside objects
      console.log('this is a different way to write regular funcitons as methods')
   }
};

// calling method in user object
user.login();
user.logout();
user.logBlogs();
user.logEnd();

// testing outputting properties
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


