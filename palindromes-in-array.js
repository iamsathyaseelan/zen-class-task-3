/**
 * Return all the palindromes in an array
 */
//define the array
const stringsList = ["sathya", "madam", "seelan", "9009", "87678"];

//Function to check that the given string is palindrome or not by taking "string" as param
function isPalindrome(string) {
    //convert the string to characters of array by characters
    let characters = string.split('');
    let reversedCharacters = characters.reverse();
    return (reversedCharacters.join('') === string);
}

//Filter the palindromes in the array
let palindromeStrings = stringsList.filter((string) => {
    return isPalindrome(string);
})
// print the palindromes of array
console.log(palindromeStrings)


