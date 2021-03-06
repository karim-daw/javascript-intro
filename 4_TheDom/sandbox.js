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

// get element by id
const title = document.getElementById("page-title");
console.log(title);

// get element by their class name
const errors1 = document.getElementsByClassName('error');
console.log(errors1) // this will give HTML collection
console.log(errors1[0]) // this still works, but foreach doesnt

// get elements based on their tag name
const paras1 = document.getElementsByTagName('p');
console.log(paras1);
console.log(paras1[0]);


//////////

// the next steps is to do something withit
// const para5 = document.querySelector('p');
// console.log(para5.innerText); // gets inner text of element
// para5.innerText = "ninjas are awesome"

const paras2 = document.querySelectorAll('p')

// change text of node list
paras2.forEach(para => {
   console.log(para.innerText);
   para.innerText += " new Text";
});

// getting content class 
const content = document.querySelector('.content');

console.log(content.innerHTML);
// you can change the contents html
content.innerHTML += '<h2> This is a new H2<h2>'


// when we want data to spit out into the browser
// can output html template in an array 
const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
   content.innerHTML += `<p>${person}</p>`;
});

// this is how to get an attribute 
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = "TheNet Ninja Website";

// creating style attribute in javascript, you can either get or set
// const mssg = document.querySelector('p');
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: Green');
// console.log(mssg.getAttribute('class'));

// getting the styles of an object
console.log(title.style);
console.log(title.style.color);

// changing styles
title.style.margin = "50px";
title.style.color = "crimson";

// changing fonts
title.style.fontSize = '60px';

// removing property
title.style.margin = '';

// showing how to get classes from element
// const content2 = document.querySelector('p');
// console.log(content2.classList)
// content2.classList.add('error')
// content2.classList.remove('error')
// content2.classList.add('success')

// query p tags and check of iit has 'err'r or 'succes'
const paras3 = document.querySelectorAll('p');
paras3.forEach(p => {
   // .innerTest will give all text that is visible
   // .textContent will get all the text regardless of hidden or not
   console.log(p.textContent);
   // .includes can be used to see if it conlcudes certain word or phrase
   if(p.textContent.includes('error')){
      p.classList.add('error');
   }
   if(p.innerText.includes('success')){
      p.classList.add('success');
   }
});