// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.

var users:string[] = [];
if (users.length != 0) {
  users.forEach((element) => {
    if (element === "admin") {
      console.log(`Hello ${element}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${element}, thank you for logging in again.`);
    }
  });
} else {
  console.log("We need to find some users!");
}
