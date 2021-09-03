// for loops
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

const password = 'p@ssword'
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
   console.log('password is too short');
}

// logical NOT (!)
let user = false;

if(!user)
{
   console.log("user aint there");
}
else{console.log("he/she is there")};


// break and continue 
const scores = [50,60,70,32,20,0,100,500,600];

for(let i = 0; i < scores.length; i++)
{
   console.log('your score: ', scores[i]);
   if(scores[i] === 100)
   {
      console.log('congrates, you got the top score!');
      break
   }
}

// switch statments - good for evalauting variables for several different cases
// note! use only straight equlaity check ===
const grade = 'D';

switch(grade)
{
   case 'A':
      console.log('you got an A!');
      break
   case 'B':
      console.log('you got an B!');
      break
   case 'C':
      console.log('you got an C!');
      break
   case 'D':
      console.log('you got an D!');
      break
   case 'E':
      console.log('you got an E!');
      break
}
