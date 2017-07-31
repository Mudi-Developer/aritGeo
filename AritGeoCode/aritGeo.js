<html>
	<body>
		<script>
		// Declare test arrays
		const arr1 = [1, 2, 3, 4, 5];
		const arr2 = [3, 6, 12, 24, 48];
		const arr3 = [];
		const arr4 = ['a', 'b', 'c'];
		const arr5 = [1, 2, 4, 6, 7, 10];

		/**
		 * The function checks the difference and ratio of each element
		 * in the provided array. If at the end of the check the 'val' is
		 * 'Arithmetic', it prints that. Same for the others. If the length of the
		 * array is 0 it prints 0
		 */
		function aritGeo(arr) {
			if (arr.length == 0) return 0;
			var val;

			// For loop that loops through the array and performs the mathematical 
			// calculations on the values of the array
			for (var i = 0; i < arr.length - 2; i++) {
				if (arr[i] - arr[i+1] == arr[i+1] - arr[i+2]) val = 'Arithmetic';
				else if (arr[i] / arr[i+1] == arr[i+1] / arr[i+2]) val = 'Geometric';
				else val = -1;
			}

			return val;
		}

		console.log(aritGeo(arr5)); // call the function and print the results
		</script>
	</body>
</html>