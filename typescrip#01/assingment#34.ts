// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
// such as I really love pizza!

var pizza_types:string[] = ["BarBQ Pizza", "Pepperoni Pizza", "ChikchenTika Pizza"];
pizza_types.forEach((pizza) => {
  console.log(pizza);
});
pizza_types.forEach((pizza) => {
  console.log(`I like ${pizza} Pizza`);
});
console.log(
  "I eat Pizza very much\nI Love Pizza so much\nI Like BarBQ Pizza very much\nI really love it!"
);
