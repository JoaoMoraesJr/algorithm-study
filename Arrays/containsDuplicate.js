//Leetcode: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//With additional structure

//Without additional structure
var containsDuplicate = function(nums) {
	if (nums == null || nums.length <= 1) return false;
	nums.sort(function(a, b) {
		return a - b;
	});
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] == nums[i-1]) {
			return true;
		}
	}
	return false;
}

var containsDuplicateWithoutStructure = function(nums){
	if (nums.length <= 1) return false;
	let memo = {};
	for (let i = 0; i < nums.length; i++) {
		if (memo[nums[i]]) {
			return true;
		}
		memo[nums[i]] = true;
	}
	return false;
}

var containsDuplicateUsingSet = function(nums) {
	return new Set(nums).size != nums.length; 
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicateWithoutStructure([1,2,3,1]));
console.log(containsDuplicateUsingSet([1,2,3,1]));
