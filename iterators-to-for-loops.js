console.log('Practice 1.\n')

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

for (i = 0; i < artists.length; i++) {
  console.log(`${artists[i]} is one of my favorite artists.`)
}

console.log('\nPractice 2.\n');

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const sqNums = [];
for (i = 0; i < numbers.length; i++) {
  sqNums.push(numbers[i]*numbers[i]);
}
console.log(sqNums);

console.log('\nPractice 3.\n');

const things = [3, 'desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const numsArr = [];

for (i = 0; i < things.length; i++) {
      if (things[i] === 'number') {
       numsArr.push(things[i])
      }
    }

console.log(numsArr);
