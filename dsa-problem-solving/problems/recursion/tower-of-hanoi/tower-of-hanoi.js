function towerOfHanoi(n, s, d, a) {
	if (n == 1) {
		return 1;
	}

	return towerOfHanoi(n - 1, s, a, d) + 1 + towerOfHanoi(n - 1, a, d, s);
}

console.log(towerOfHanoi(3, "a", "c", "b"))
