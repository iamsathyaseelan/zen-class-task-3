/**
 * Return median of two sorted arrays of same size
 */
//define two array of same size
const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];

function medianOfTwoArray(array1, array2) {
    if (array1.length === array2.length) {
        //convert the two array into single array by spread operator
        let singleArray = [...array1, ...array2];
        //sort the array into ascending order
        let sortedArray = singleArray.sort((a, b) => {
            return a - b;
        });
        //sum the middle two digits
        let sumOfMiddleTwo = sortedArray[array1.length] + sortedArray[array1.length - 1];
        if (sumOfMiddleTwo > 0) {
            //return median
            return sumOfMiddleTwo / 2;
        }
        return 0;
    }
    return 0;
}

console.log(medianOfTwoArray(arr1, arr2))

