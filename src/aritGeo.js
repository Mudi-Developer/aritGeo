'use strict';

 /**
 * The function checks the difference and ratio of each element
 * in the provided array. If at the end of the check the 'val' is
 * 'Arithmetic', it prints that. Same for the others. If the length of the
 * array is 0 it prints 0
 */
const aritGeo = (arr) => {
  
   if (!Array.isArray(arr)) return 'Input must not be empty';
   if (arr.length === 0) return 0;


   let value; // value for checks
   let commonDifference = arr[1] - arr[0]; // arithmetic ratio
   let commonRatio = arr[1] / arr[0]; // geometric ratio

   // For loop that loops through the array and performs the mathematical 
            // calculations on the values of the array
   for (let i = 0; i < arr.length - 1; i++) {
       if (arr[i] + commonDifference === arr[i + 1]) { // check for arithmetic
           value = 'Arithmetic';
       } else if (arr[i] * commonRatio === arr[i + 1]) { // check for geometric
           value = 'Geometric';
       } else value = -1; // check for neither arithmetic/geometric
   }
   // return value
   return value;
};

module.exports = aritGeo;