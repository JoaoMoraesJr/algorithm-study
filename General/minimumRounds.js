//Leetcode: Minimum rounds to complete - https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/
//You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.
//Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.
//Input: tasks = [2,2,3,3,2,4,4,4,4,4]
//Output: 4

//Brute Force
var minimumRoundsBruteForce = function(tasks) {
    let dict = {};
    tasks.forEach(task => {
        if (dict[task] != null) {
            dict[task]++;
        }
        else {
            dict[task] = 1;
        }
    });
    let output = 0;
    for (let task in dict) {
        while (dict[task] > 0) {
            if (dict[task] - 3 == 0 || dict[task] - 3 >= 2) {
                dict[task] = dict[task] - 3;
                output ++;
            } else if (dict[task] - 2 == 0 || dict[task] - 2 >= 2) {
                dict[task] = dict[task] - 2;
                output ++;
            } else {
                return -1;
            }
        }
    }
    return output;
};

//Using division
//Time complexity = O(n)
//Space complexity = O(n) - Using dictionaries
var minimumRounds = function(tasks) {
    let dict = {};
    tasks.forEach(task => {
        if (dict[task] != null) {
            dict[task]++;
        }
        else {
            dict[task] = 1;
        }
    });
    let output = 0;
    for (let task in dict) {
        if (dict[task] == 1) return -1;
        if (dict[task]%3 == 0) output += dict[task]/3;
        else output += Math.floor(dict[task]/3)+1;
    }
    return output;
};

console.log(minimumRounds([2, 2, 2, 3, 3, 4, 3, 4, 4, 4]));