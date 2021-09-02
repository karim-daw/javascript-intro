// for loops
// for(let i = 0; i < 5; i++)
// {
//    console.log('in loop:',i);

// }
// console.log('loop finished');

const names = ['sean','mario','luigi'];

for(let i = 0; i < names.length; i++)
{
   //console.log(names[i] + " " + i)
   
   // create snippit of html in using variable
   let html = `<div>${names[i]}</div>`;
   console.log(html);
}


// while loops

let i = 5
while(i < names.length)
{
   console.log(names[i], i);
   i++;
}

// do while loops, execuse block a code whether condition is true or not first

do
{
   console.log('val of i is: ', i);
   i++;
}
while(i<5);

// if statements
const age = 25;
if( age > 20)
{
   console.log('you are over 20 years old')
}

const ninjas = ['sean', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3)
{
console.log("that is a lot of ninjas");
}

// if else statments
// logical operators - OR || and AND &&

const password = 'password'
if(password.length >= 8 && password.includes('@'))
{
   console.log('password is long enough');
}
else if(password.length >= 4 || password.includes('@'))
{
   console.log('password is at the limit');
}
else
{
   console.log('password is too short')
}

