// this is an object tutorial

var dog = {};
dog.name = 'Fido';
dog.age = 3;

var cat = {name:'Fluffy', age:5};
console.log(dog, cat);

cat.toys = ['fluff', 'scratch', 'mouse'];
console.log(cat);
cat.toys.push('small box');
console.log(cat);
cat.toys.splice(1, 1);
console.log(cat);

function Cat(name, age){
  this.name = name;
  this.age = age;
}

var fluffy = new Cat('Miss Sassypants', 3);
console.log('Fluffy', fluffy);
