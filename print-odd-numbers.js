/**
 * Print odd numbers in an array
 */
//define the array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Function to check that the number is odd number or not by taking "number" as param
function isOddNumber(number) {
    return (+number % 2 !== 0);
}

//Filter all the odd numbers
let oddNumbers = numbersArray.filter((number) => {
    return isOddNumber(number);
})
// print the odd numbers
console.log(oddNumbers)

