/**
     * The function checks the difference and ratio of each element
     * in the provided array. If at the end of the check the 'val' is
     * 'Arithmetic', it prints that. Same for the others. If the length of the
     * array is 0 it prints 0
     */
    const aritGeo = (arr) => 
    {
      let val;      

      if (arr.length == 0) return 0; // case of array is empty
      if (typeof arr === 'boolean') return 'this is boolean';
      if (typeof arr === 'string') return 'string input is invalid';
      if (arr === Infinity) val = 'undefined';      
      if (typeof arr === 'function') val = 'function input is invalid';
      
      if (arr%2 == 0) val = 'even integer';
      if (arr%2 == 1) val = 'odd integer';
      
      

     




      // For loop that loops through the array and performs the mathematical 
      // calculations on the values of the array
      for (let i = 0; i < arr.length - 2; i++) 
      {
        if (arr[i] - arr[i + 1] == arr[i + 1] - arr[i + 2]) 
          val = 'Arithmetic';
        else if (arr[i] / arr[i + 1] == arr[i + 1] / arr[i + 2]) 
          val = 'Geometric';
        else val = -1;
      }

      return val;
    }

    module.exports = aritGeo;