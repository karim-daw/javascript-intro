// store reference to the element 
// best way to query the dom
// 'p' will grab the first p tag
const para = document.querySelector('p');
// "." for when you want to access class tag
const para2 = document.querySelector('.error');
const para3 = document.querySelector('div.error');

// you can also right click and copy selector from elements
// in browser and paste into query selector
const para4 = document.querySelector(
   'body > div:nth-child(2) > p:nth-child(2)'
);

// if you want get several objects at the same time
// will return a NodeList
const paras = document.querySelectorAll('p');

// can use fore eac on a group of nodes
paras.forEach(para =>{
   console.log(para);
});

// get all error class elements
const errors = document.querySelectorAll('.error');

console.log(para);
console.log(para2);
console.log(para3);
console.log(para4);
console.log(paras);
console.log(errors);