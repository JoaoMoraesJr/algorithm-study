var climbStairsDFS = function (n) {
	function dfs (n, x) {
		if (n == x) return 1;
		if (n < x) return 0;
		if (n > x) return dfs(n, x+1) + dfs(n,x+2)
	}
	return dfs(n, 0);
}

var climbStairsMemo = function (n) {
	function dfs(n, x) {
		if (n == x) return 1;
		if (n < x) return 0;
		if (n > x) {
			return dfs(n, x+1) + dfs(n, x+2)
		}
	}
	return dfs(n, 0);
}


console.log(climbStairsDFS(3));
console.log(climbStairsDFS(4));
console.log(climbStairsMemo(3));
console.log(climbStairsMemo(4));
