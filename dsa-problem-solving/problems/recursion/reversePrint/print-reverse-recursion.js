function printReverse(arr, index) {
	if (arr.length <= index) {
		return;
	}
	printReverse(arr, index + 1);

	// tail recursion

	console.log(arr[index]);
}

printReverse([1, 2, 3, 4], 0)