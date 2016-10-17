/*
    Kata Fizz Buzz in Node JS
    By Jordi Sanchez
 */

//Tests
function itShouldPrintANumberWhenPassingNotMultiplesOfThreeNeitherFive(implementFn)
{
    const NON_MULTIPLE_OF_THREE_NEITHER_FIVE = 4;
    return (NON_MULTIPLE_OF_THREE_NEITHER_FIVE == implementFn(NON_MULTIPLE_OF_THREE_NEITHER_FIVE));
}
function itShouldPrintFizzBuzzWhenPassingMultipleOfThreeAndFive(implementFn)
{
    return ("FizzBuzz" == implementFn(15));
}
function itShouldPrintFizzWhenPassingMultipleOfThree(implementFn)
{
    return ("Fizz" == implementFn(3));
}
function itShouldPrintBuzzWhenPassingMultipleOfFive(implementFn)
{
    return ("Buzz" == implementFn(5));
}

//Implementation
function printFBK(number){
    if ((number % 3 == 0) && (number % 5 == 0)) { return "FizzBuzz"; }
    if (number % 3 == 0) { return "Fizz"; }
    if (number % 5 == 0) { return "Buzz"; }
    return number;
}

//Run
for(var i=1; i <= 100; i++) {
    console.log(printFBK(i));
}

//Run tests
console.log('Test 1. ' + itShouldPrintANumberWhenPassingNotMultiplesOfThreeNeitherFive(printFBK));
console.log('Test 2. ' + itShouldPrintFizzBuzzWhenPassingMultipleOfThreeAndFive(printFBK));
console.log('Test 3. ' + itShouldPrintFizzWhenPassingMultipleOfThree(printFBK));
console.log('Test 4. ' + itShouldPrintBuzzWhenPassingMultipleOfFive(printFBK));
