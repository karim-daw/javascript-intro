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
const speak = function()
{
   console.log('good day')
};
speak();
