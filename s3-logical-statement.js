// function declaration
function sayHello() { }

// function expression
const sayHelloExpression = function () { }

// arrow function
const sayHelloArrow = () => { }

const subArray = [].filter(function (x) {
  return x > 5;
});

const subArray = [].filter(x => x > 5);








const sumDigits = (number) => {
  if (number < 100 || number > 999) return 0;

  const d1 = Math.trunc(number / 100);
  const d3 = number % 10;
  const d2 = Math.trunc(
    (number % 100) / 10
  );

  return d1 + d2 + d3;
}
console.log(sumDigits(237));
console.log(sumDigits(785));
console.log(sumDigits(947));







const sum = (n) => {
  if (n <= 0) return 0;

  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    // if (i < 10) {
    //   if (i % 2 === 1) total += i;
    // } else {
    //   if (i % 2 === 0) total += i;
    // }

    if (
      (i < 10 && i % 2 === 1)
      || (i >= 10 && i % 2 === 0)
    ) {
      total += i;
    }

    // const temp = (i < 10 && i % 2 === 1) || (i >= 10 && i % 2 === 0)
    //   ? i
    //   : 0;
    // total += temp;
  }

  return total;
}






const seconds = '5';
const ss = `0${seconds}`.slice(-1, 2);
console.log(ss);







console.log(100 + (200 - '300') + 'abc');
console.log('300' - 100);






// hello world
const findTheLongestWord = (str) => {
  if (!str) return '';

  // Split str into wordList
  // Assume the longest word is empty string
  // Loop thourgh word list, find the longest
  // return;
  let longestWord = '';
  const wordList = str.split(' ');

  for (let i = 0; i < wordList.length; i += 1) {
    const currentWord = wordList[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

console.log(findTheLongestWord('hello world'));