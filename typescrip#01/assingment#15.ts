// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
let namearray = ["rashid", "jamhsed", "atif", "jawad", "amir"];
let total_number_of_invititaion = 3;
let count = 0;
namearray.forEach((element) => {
  if (
    element.match("rashid") ||
    element.match("jamhsed") ||
    element.match("kamran")
  ) {
    console.log("Your are invitting to dinner Mr. " + element);
    count++;
  } else if (count < 3) {
    console.log("Your are invitting to dinner Mr. " + element);
    count++;
  }
});
export {namearray}
