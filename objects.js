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

Cat.prototype.purr = function(){
  console.log(this.name + ' is purring and is ' + this.age + ' years old.');
};

var fluffy = new Cat('Fluffy', 3);
console.log('Fluffy', fluffy);
fluffy.purr();

var molly = new Cat('Molly', 5);
molly.purr();

var cats = [];
for(var i = 1; i < 11; i++){
  var cat = new Cat('cat'+i, i);
  cats.push(cat);
}

// cats.forEach(function(c){
//   c.purr();
// });

cats.forEach(function(c){
  if(c.age > 5){
    c.purr();
  }
});
