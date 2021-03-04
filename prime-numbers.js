/**
 * Return all the prime numbers in an array
 */
//define the array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//Function to check that the number is prime number or not by taking "number" as param
function isPrimeNumber(number) {
    number = +number;
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//Filter all the prime numbers
let primeNumbers = numbersArray.map(Number).filter((number) => {
    return isPrimeNumber(number);
})
// print the prime numbers
console.log(primeNumbers)

