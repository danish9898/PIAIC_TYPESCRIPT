// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let namearray = ["rashid", "jamhsed", "kamran", "jawad", "amir"];
namearray.forEach((element) => {
  if (
    element.match("rashid") ||
    element.match("jamhsed") ||
    element.match("kamran")
  ) {
    console.log("Your are invitting to dinner Mr. " + element);
  } else {
    console.log("Sorry your are not invitting to dinner Mr. " + element);
  }
});
export {namearray}