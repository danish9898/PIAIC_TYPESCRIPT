// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

var arraylist:number[] = [8, 9, 3];
function testStringsEquality(param1:any, result:any) {
  return param1 === result ? "true result" : "false result";
}

function testStringsEqualityWithLowerCase(param1:any, result:any) {
  return param1.toLowerCase() === result.toLowerCase()
    ? "true result"
    : "false result";
}

console.log(testStringsEquality("lahore", "lahore"));
console.log(testStringsEquality("lahore", "karachi"));
console.log(testStringsEqualityWithLowerCase("lahore", "lahore"));
console.log(testStringsEqualityWithLowerCase("lahore", "karachi"));

function numericalTestwithEquality(param1:any, result:any) {
  return param1 === result ? "true result" : "false result";
}
console.log(numericalTestwithEquality(1, 1));
console.log(numericalTestwithEquality(1, 2));

function numericalTestwithGreatorThanAndLessThan(param1:any, result:any) {
  return param1 > result || param1 < result ? "true result" : "false result";
}
console.log(numericalTestwithGreatorThanAndLessThan(3, 1));
console.log(numericalTestwithGreatorThanAndLessThan(2, 2));

function numericalTestwithGreatororEqualTo(param1:any, result:any) {
  return param1 > result || param1 === result ? "true result" : "false result";
}
console.log(numericalTestwithGreatororEqualTo(3, 1));
console.log(numericalTestwithGreatororEqualTo(1, 2));

function testItemContainsInArray(number:number) {
  return arraylist.includes(number) === true ? "true result" : "false result";
}
console.log(testItemContainsInArray(3));
console.log(testItemContainsInArray(7));

function testItemNotInArray(number:number) {
  return arraylist.includes(number) === false ? "true result" : "false result";
}
console.log(testItemNotInArray(10));
console.log(testItemNotInArray(3));
