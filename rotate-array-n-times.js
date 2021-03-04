/**
 * Rotate an array by k times and return the rotated array
 */
//define the array
const stringsList = ["sathya", "madam", "seelan", "9009", "87678", "madam", "seelan"];

//Function to rotate the given array for k times by taking "array" and "k" as param
function rotateArray(array, k) {
    k = +k;
    if (k > 0) {
        //loop for k number of times
        for (let i = 0; i < k; i++) {
            //remove the first element from the array
            let spliced = array.splice(0, 1);
            //then, add the removed element to the end of the array
            array.push(spliced[0]);
        }
    }
    return array;
}

//rotate the array
let rotatedArray = rotateArray(stringsList, 3);
// print the rotated array
console.log(rotatedArray)


