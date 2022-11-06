const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubleNumbers);

const doubleNumberFunction = (numbersList) => {
  myNumbers = [];
  numbersList.forEach((num) => {
    myNumbers.push(num * 2);
  });
  return myNumbers;
};

console.log(doubleNumberFunction(doubleNumbers));
