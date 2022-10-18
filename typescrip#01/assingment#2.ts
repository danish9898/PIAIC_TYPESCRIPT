// Q = 2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
function personName(person = "eric") {
  let name = person;
  return name;
}
let eric = "Eric";
console.log(
  "Hello " + personName(eric) + " would you like to learn some Python today?”"
);
