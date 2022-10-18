// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
interface Carobject {
  manufacturer: string;
  model: number;
  color: string;
}
function carInfo(manufacturer: string, model: number, color: string) {
  var obj: Carobject = {
    manufacturer: manufacturer,
    model: model,
    color: color,
  };
  return obj;
}
console.log(carInfo("Honda", 218, "white"));
console.log(carInfo("Toyota", 2022, "black"));
console.log(carInfo("BMW", 2021, "red")); 
