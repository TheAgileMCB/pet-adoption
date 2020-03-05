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
  Pet.allPets.push(this);
}

Pet.allPets = [];
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


//take in an event parameter so that we can prevent the default
function handleFormSubmitted(event){
  event.preventDefault();
  console.log(event);
  var nameInput = document.getElementById('name');
  var nameValue = nameInput['value'];
  var breedInput = document.getElementById('breed');
  var breedValue = breedInput['value'];
  var imageInput = document.getElementById('imageName');
  var imageValue = imageInput.value;
  var interestsInput = document.getElementById('interests');
  var interestsValue = interestsInput.value;

  var isGoodWithKids = event.target.isGoodWithKids.checked;
  var isGoodWithDogs = event.target.isGoodWithDogs.checked;
  var isGoodWithCats = event.target.isGoodWithCats.checked;

  var newPet = new Pet(nameValue, breedValue, imageValue, interestsValue, isGoodWithKids, isGoodWithDogs, isGoodWithCats);

  newPet.setAge();
  newPet.getInterests();
  newPet.render();
}

//Set up the event listener to listen to the submit event
// 1. which element do we need
var formElement = document.getElementById('new-pets');
form.reset();

// 2. which event am I listening for?

// 3. what code should i run when that event happens?
formElement.addEventListener('submit', handleFormSubmitted);
