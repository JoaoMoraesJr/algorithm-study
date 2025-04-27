//Leetcode: Given an integer array nums of unique elements, return all possible subsets (the power set).
//The solution set must not contain duplicate subsets. Return the solution in any order.

//[1, 2, 3] = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
//[1, 2, 3, 4] = [[], [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4]]

var subsets = function (nums) {
    function dfs (last, pos) {
        if (pos > nums.length) return;
        for (let i = pos; i < nums.length; i++) {
            let arrayAux = JSON.parse(JSON.stringify(last));
            arrayAux.push(nums[i]);
            results.push(arrayAux);
            dfs(results[results.length-1], i+1);
        }
    }
    var results = [[]];
    dfs([], 0);
    return results;
}

console.log(subsets([1, 2, 3, 4]));