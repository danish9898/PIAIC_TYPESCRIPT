// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var favoritePlaceArray = ["Sawat", "Murre", "Lahore", "Karachi", "Islamabad"];
let arrayList:string[]= [];
console.log("Original Array");
favoritePlaceArray.forEach((element) => {
  console.log(element);
  arrayList.push(element);
});
arrayList.sort();
console.log("Alphabetic Order Array");
arrayList.forEach((element) => {
  console.log(element);
});
console.log("Array is still in original order");
favoritePlaceArray.forEach((element) => {
  console.log(element);
});
arrayList.reverse();
console.log("Array is in reverse order");
arrayList.forEach((element) => {
  console.log(element);
});
console.log("Array is still in original order");
favoritePlaceArray.forEach((element) => {
  console.log(element);
});
favoritePlaceArray.reverse();
console.log("Original Array Order changed");
favoritePlaceArray.forEach((element) => {
  console.log(element);
});
favoritePlaceArray.reverse();
console.log("Array back in original order");
favoritePlaceArray.forEach((element) => {
  console.log(element);
});
favoritePlaceArray.sort();
console.log("Alphabetic Order Array");
favoritePlaceArray.forEach((element) => {
  console.log(element);
});
favoritePlaceArray.reverse();
console.log("Alphabetic Order Array changed reversed");
favoritePlaceArray.forEach((element) => {
  console.log(element);
});
