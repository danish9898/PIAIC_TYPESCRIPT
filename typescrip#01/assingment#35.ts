// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as A dog would make a great pet.
// Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!

var animals:string[] = ["cat", "dog", "lion"];
animals.forEach((animal) => {
  console.log(animal);
});
animals.forEach((animal) => {
  if (animal.match("dog")) {
    console.log(`A ${animal} would make a great Pet.`);
  }
  if (animal.match("cat")) {
    console.log(`A ${animal} have very sharp nails and teeth.`);
  }
  if (animal.match("lion")) {
    console.log(`A ${animal} ahve sharp teeth.`);
  }
});
console.log(
  "cat and dog have sharp and powerful legs and most commonly pet animal"
);
