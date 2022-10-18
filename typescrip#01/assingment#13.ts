// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

var vehicles = ["Honda", "United", "Yamha"];
vehicles.forEach((element) => {
  if (element.match("Honda")) {
    console.log("I would like to own a " + element + "  motorcycle.");
  } else if (element.match("United")) {
    console.log("I don't like " + element + " motorcycle.");
  } else {
    console.log("I would like to own a " + element + " motorcycle.");
  }
});
export {vehicles}