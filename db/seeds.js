let User = require('../models/User.js');
let Project = require('../models/Project.js');
let Discussion = require('../models/Discussion.js');

let seedUsers = [

]

let seedProjects = [

]

let seedDiscussion = [

]

let coffeeObjects;
Donut.deleteMany().then(() => {
  return Coffee.deleteMany();
}).then(() => {
  return User.deleteMany();

}).then(() => {
  return Coffee.create(newCoffees);
}).then(coffees => {
  coffeeObjects = coffees;
  return Donut.create(newDonuts);
}).then(donuts => {
  donuts[1].coffee = coffeeObjects[0];
  return donuts[1].save();

}).then(() => {
  return User.create(newUser);

}).then(() => {
  console.log('Database seeded');
});