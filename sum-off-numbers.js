/**
 * Sum of all numbers in an array
 */
//define the array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Function to sum all the numbers in array
function sum(numbers) {
    let sum = 0;
    if (numbers.length > 0) {
        for (let number of numbers) {
            sum += +number;
        }
    }
    return sum
}

//Sum all the numbers
let sumOfNumbers = sum(numbersArray);
// print the sum of numbers
console.log(sumOfNumbers)
