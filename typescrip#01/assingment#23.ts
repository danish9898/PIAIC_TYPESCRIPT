// Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

function conditionFunction(param1:any,result:any){
    return (param1 === result ? 'True ' : 'False');
}
// Tested true cases
console.log(conditionFunction('10','10'));
console.log(conditionFunction('abc','abc'));
console.log(conditionFunction('lahore','lahore'));
console.log(conditionFunction('karachi','karachi'));
console.log(conditionFunction('lslambad','lslambad'));

// Tested false cases
console.log(conditionFunction('10','123'));
console.log(conditionFunction('abc','jjklmm'));
console.log(conditionFunction('abc',22));
console.log(conditionFunction('abc',"154"));
console.log(conditionFunction(55,""));
