var a = [];
var b = [3,5,7];
console.log(a, b);

b.push(9);
b.push(11);

console.log(b);

var c = b.pop();
console.log(b, c);

b.unshift(1);
b.unshift(-1);
console.log('after unshift', b);

var d = b.shift();
console.log('after shift', b, d);

var isOdd = b.every(function(curr, index, arr){
  console.log(curr, index, arr);
  return curr%2;
});
console.log('isOdd:', isOdd);

b.push(30);

isOdd = b.every(function(curr, index, arr){
  return curr%2;
});
console.log('isOdd:', isOdd);

var animals = ['dog', 'cat', 'mouse', 'goat', 'bear'];

var evenLengthedAnimals = animals.filter(function(curr, index, arr){
  return !(curr.length%2);
});
console.log('animals', animals, 'evenLengthedAnumals', evenLengthedAnimals);

animals.forEach(function(curr, index, array){
  console.log('look, I am lopping', curr);
});

var indexOfMouse = animals.indexOf('mouse');
console.log('the index of the mouse is', indexOfMouse);

// join is the opposite of split
var joinedAnimals = animals.join(' and ');
console.log('the joined animals', joinedAnimals);

var primes = [1, 3, 5, 7, 11, 13, 17, 19];
var squaredPrimes = primes.map(function(curr, index, arr){
  return curr * curr;
});

console.log('primes', primes, 'squaredPrimes', squaredPrimes);

var sumOfPrimes = primes.reduce(function(prev, curr, index, arr){
  console.log('inside reduce');
  console.log(prev, curr, index, arr);
  return prev + curr;
});

console.log('sumOfPrimes', sumOfPrimes);

primes.reverse();
console.log('the reversed primes are', primes);

// array slicing

var primes1 = primes.slice();
var primes2 = primes.slice(-2);
console.log('p1', primes1, 'p2', primes2);
var primes3 = primes.slice(6);
console.log('p3', primes3);
var primes4 = primes.slice(2, 5);
console.log('p4', primes4);

var someOdd = [3,4,5,6].some(function(curr, index, arr){
  return curr%2;
});
console.log(someOdd);

var sortedAnimals = animals.sort();
console.log(sortedAnimals);

var someNums = [3,731,220,50,18,99,63];
console.log(someNums.sort());
someNums.sort(function(a, b){
  if(a < b){
    return -1;
  }
  else if(a > b){
    return 1;
  }
  else{
    return 0;
  }
});
console.log('someNums sorted', someNums);

// array splicing

var moreNums = [4,5,6,7];
moreNums.splice(1, 1);
console.log('spliced a 5 from moreNums', moreNums);
moreNums.splice(2, 0, 77);
console.log('adding 77 after 6', moreNums);
console.log([5,6,7].toString());
