'use strict';
console.log('ready to rock');

// var petOne = {
//   name: 'bob',
//   breed: 'maine coon',
//   age: 0,
//   imageName: 'pet2',
//   interests: ['sunlight', 'yarn', 'cat nip', 'mice'],
//   isGoodWithKids: false,
//   isGoodWithDogs: true,
//   isGoodWithCats: false,
//   setAge: function() {
//     this.age = randomAge(3, 12) + 'Months';
//   }
// };
// petOne.setAge();


function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.name = name;
  this.breed = breed;
  this.age = this.setAge();
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}

// Pet.prototype.functionName = function(parameter1, parameter2, parameter3, etc.)
// now, any pet created within Pet constructor will be able to call this method
Pet.prototype.setAge = function() {
  this.age = randomAge(3,12) + ' months';
};

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

Pet.prototype.getInterests = function() {
  var randomIndex = Math.floor(Math.random() * this.interests.length);
  return this.interests[randomIndex];
};


// Create some DOM elements and then render them in the index
Pet.prototype.render = function() {

  // grab the parent element
  var parentElement = document.getElementById('kitten-profiles');

  // create child elements article, h2, p, ul, li interests and image
  var article = document.createElement('article');
  parentElement.appendChild(article);

  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  var petParagraph = document.createElement('p');
  petParagraph.textContent = `${this.name} is adorable, and is ${this.age} old.`;
  article.appendChild(petParagraph);

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for(let i = 0; i < this.interests.length; i++) {
    var li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.imageName + '.jpg');
  img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!');
  article.appendChild(img);


  var animalTable = document.getElementById('animal-table');

  var petRow = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  petRow.appendChild(nameCell);

  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  var ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  var interestsCell = document.createElement('td');
  interestsCell.textContent = this.getInterests();
  petRow.appendChild(interestsCell);

  animalTable.appendChild(petRow);



};

var firstPet = new Pet('Nova', 'Lab', 'pet3', ['chew toys', 'cats', 'sticks', 'children'], true, true, true);
firstPet.setAge();

var secondPet = new Pet('Denise', 'Short hair', 'pet2', ['cat nip', 'cats', 'balls', 'yarn'], false, true, true);
secondPet.setAge();

var thirdPet = new Pet('Robert', 'Alaskan king', 'pet1', ['carrots', 'birds', 'grass', 'wood'], true, false, true);
thirdPet.setAge();

var adoptPet = [firstPet, secondPet, thirdPet];

// loop through objects to show some information on the page
for(let i = 0 ; i < adoptPet.length; i++){
  adoptPet[i].render();
}

// function randomAge(min, max) {
//   return Math.floor(Math.random()* (max-min+1)+min);
// }

// petOne.isFixed = true;
// petTwo.isFixed = true;


// create a DOM element and render it in HTML

// create a new element the parent of the child element that we will create to render the pet article in the HTML

// var parentElement = document.getElementById('kitten-profiles');

// // Create article
// var article = document.createElement('article');
// console.log(article);
// parentElement.appendChild(article);

// // // Create h2
// var h2 = document.createElement('h2');
// h2.textContent = 'Please, adopt me! I\'m' + petOne.name;
// article.appendChild(h2);

// // // create <p>
// var petParagraph = document.createElement('p');
// petParagraph.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old';
// article.appendChild(petParagraph);

// // // create a <ul>
// var petUl = document.createElement('ul');
// article.appendChild(petUl);

// for (var i = 0; i <petOne.interests.length; i ++) {

//   // create <li>
//   var petLi = document.createElement('li');

//   // fill in the list
//   petLi.textContent = petOne.interests[i];
//   petUl.appendChild(petLi);
// }
// // add an image
// var petImage = document.createElement('img');
// petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
// petImage.setAttribute('alt', 'cute space kitten');
// article.appendChild(petImage);

// set some values on the images
