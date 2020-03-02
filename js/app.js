'use strict';
console.log('ready to rock');

var petOne = {
  name: 'bob',
  breed: 'maine coon',
  age: 0,
  imageName: 'pet2',
  interests: ['sunlight', 'yarn', 'cat nip', 'mice'],
  isGoodWithKids: false,
  isGoodWithDogs: true,
  isGoodWithCats: false,
  setAge: function() {
    this.age = randomAge(3, 12) + 'Months';
  }
};

var petTwo = {
  name: 'tom',
  breed: 'tiger',
  age: 0,
  imageName: 'pet2',
  interests: ['sunlight', 'yarn', 'cat nip', 'mice'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  setAge: function() {
    this.age = randomAge(3, 12) + 'Months';
  }
};

function randomAge(min, max) {
  return Math.floor(Math.random()* (max-min+1)+min);
}

petOne.isFixed = true;
petTwo.isFixed = true;


// create a DOM element and render it in HTML

// create a new element the parent of the child element that we will create to render the pet article in the HTML

var parentElement = document.getElementById('kitttenProfiles');

// Create article
var article = document.createElement('article');
parentElement.appendChild(article);

// Create h2
var h2 = document.createElement('h2');
article.appendChild(h2);

// create <p>
var petParagraph = document.createElement('p');
petParagraph.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old';
article.appendChild(petParagraph); 

// create a <ul>
var petUl = document.createElement('ul');
article.appendChild(petUl);

for (var i = 0; i <petOneOne.interests; i ++) {

// create <li>
var petLi = document.createElement('li');

// fill in the list
petLi.textContent = petOne.interests[i];
petUl.appendChild(petLi);
// add an image
var petImage = document.createElement('img');
petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
petImage.setAttribute('alt="cute space kitten"');

// set some values on the images