/**
 * Convert all the strings to title caps in a string array
 */
//define the array
const wordsList = ["my name is sathyaseelan", "madam", "seelan"];

//Function to make title case for given word by taking "word" as param
function toTitleCase(word) {
    //trim the word, it removes the extra spaces in the word
    word = word.trim();
    if (word.length > 0) {
        //make the first character to caps and then append the remaining chars to the first character
        return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    }
    return word;
}

//make all words in array to title caps
let titleCapsArray = wordsList.map((word) => {
    return toTitleCase(word);
})
// print the odd numbers
console.log(titleCapsArray)

