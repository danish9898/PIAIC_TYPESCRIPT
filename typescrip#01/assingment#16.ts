// Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.

let namearray = ["rashid", "jamhsed", "atif", "jawad", "amir"];
let valid = ["rashid", "jamhsed", "kamran"]; // valid invited customer

let invitearray: any = [];
let length = valid.length;
let count = 0;
valid.forEach((element) => {
  namearray.forEach((element1) => {
    if (element1.match(element)) {
      invitearray.push(element);
      valid.shift();
      count++;
    } else if (count < length) {
      invitearray.push(element1);
      count++;
    } else {
      // invitearray.push(element)
    }
  });
});

console.log("invited array : ...." + invitearray);
export { invitearray };
