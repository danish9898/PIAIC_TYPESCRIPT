// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(message:string, size:string = "large") {
  if (size === "large") {
    console.log(message);
  } else if (size === "medium") {
    console.log(message);
  } else {
    console.log(message);
  }
}
make_shirt("This is for testing");
make_shirt("I love T-shirts", "medium");
make_shirt("I am danish", "small");
