// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16.
// Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.

let namearray: string[] = ["rashid", "jamhsed", "atif", "jawad", "amir"];
let newarray: string[] = [];
namearray.forEach((Element) => {
  const index = namearray.indexOf(Element);
  if (namearray.indexOf("rashid") !== -1) {
    console.log(`${Element} you’re sorry you can’t invite for the dinner!`);
    newarray = namearray.splice(index, 1);
  } else if (namearray.indexOf("jamhsed") !== -1) {
    console.log(`${Element} you’re sorry you can’t invite for the dinner!`);
    newarray = namearray.splice(index, 1);
  } else if (namearray.indexOf("atif") !== -1) {
    console.log(`${Element} you’re sorry you can’t invite for the dinner!`);
    newarray = namearray.splice(index, 1);
  } else if (namearray.indexOf("jawad") !== -1) {
    console.log(`${Element} you’re sorry you can’t invite for the dinner!`);
    newarray = namearray.splice(index, 1);
  }
});

newarray.push("samad");
newarray.forEach((element, index) => {
  console.log(element);
});
export { namearray };
