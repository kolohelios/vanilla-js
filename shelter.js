function Shelter(name, capacity){
  this.name = name;
  this.capacity = capacity;
  this.animals = [];
}

Shelter.prototype.addAnimal = function(animal){
  if(this.animals.length < this.capacity){
    this.animals.push(animal);
  }
};

Shelter.prototype.adoptAnimal = function(name){
  var animal;
  for(var i = 0; i < this.animals.length; i++){
    if(this.animals[i].name === name){
      animal = this.animals.splice(i, 1)[0];
    }
  }
  return animal;
};

Shelter.prototype.findBySpecies = function(species){
  return this.animals.filter(function(a){
    return a.species === species;
  });
};

function Animal(name, age, species){
  this.name = name;
  this.age = age;
  this.species = species;
}

function Person(name){
  this.name = name;
  this.pets = [];
}

var s1 = new Shelter('Happy Tails', 7);

for(var i = 0; i < 10; i++){
  var animal = new Animal(makeName(i), randomAge(), randomSpecies());
  s1.addAnimal(animal);
}

var bob = new Person('Bob');
bob.pets.push(s1.adoptAnimal('animal3'));
bob.pets.push(s1.adoptAnimal('animal4'));

console.log(bob, s1);

function randomAge(){
  return Math.floor((Math.random() * 20) + 3);
}

function randomSpecies(){
  var species = ['dog', 'cat', 'wombat', 'marmot', 'snake', 'fish', 'bee'];
  var randomNumber = Math.floor(Math.random() * species.length);
  return species[randomNumber];
}

function makeName(i){
  return 'animal' + i;
}
