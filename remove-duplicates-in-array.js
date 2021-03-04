/**
 * Remove duplicates from an array
 */
//define the array
const stringsList = ["sathya", "madam", "seelan", "9009", "87678", "madam", "seelan"];

//Function to remove the duplicate strings in given array by taking "array" as param
function removeDuplicates(array) {
    //stores the unique value of any data type, here is array
    let uniqueSet = new Set(array);
    //create an array from set object and then return the array of unique values
    return Array.from(uniqueSet);
}

//Filter the duplicates
let uniqueArray = removeDuplicates(stringsList);
// print the unique array
console.log(uniqueArray)


