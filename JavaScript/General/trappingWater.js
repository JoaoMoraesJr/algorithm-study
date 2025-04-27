//Trapping Rain Water
//Leetcode: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
//Example where X = wall and W = water. height = [2, 0, 2, 0, 1]. output = 3
// X W X   
// X W X W X

//Time complexity = O(level * n)
//Space complexity = O(1)
var trappingWaterByLevel = function(height) {
    let highestLevel = 0;
    height.forEach(element => {
        if (element > highestLevel) highestLevel = element;
    });
    let result = 0;
    for (let level = 0; level <= highestLevel; level++) {
        let trapIndex = -1;
        for(let i = 0; i < height.length; i++) {
            if (height[i] >= level) {
                if (height[i] >= level && trapIndex > -1) {
                    result += i - trapIndex -1;
                    trapIndex = i;
                }
                else if (trapIndex == -1) trapIndex = i;
            }
        }
    }
    return result;
}

//Time complexity = O(n^2)
//Space complexity = O(1)
var trappingWaterBruteForce = function(height) {
    let result = 0;
    if (height.length <= 2) return 0;
    for (let i = 1; i < height.length-1; i++) {
        rightTrap = 0;
        leftTrap = 0;
        for (let j = i-1; j >= 0; j--) {
            if (height[j] > rightTrap) {
                rightTrap = height[j];
            }
        }
        for (let k = i+1; k < height.length; k++) {
            if (height[k] > leftTrap) {
                leftTrap = height[k];
            }
        }
        if (rightTrap > height[i] && leftTrap > height[i]) {
            if (rightTrap > leftTrap) result += leftTrap - height[i];
            else result += rightTrap - height[i];
        }
    }
    return result;
}

//Time complexity = O(n)
//Space complexity = O(n)
var trappingWaterStack = function(height) {
    let result = 0;
    let trapStack = [];
    for (let i = 0; i < height.length; i++) {
        while (trapStack.length > 0 && height[i] > height[trapStack[trapStack.length-1]]) {
            let trap = trapStack.pop();
            if (trapStack.length == 0) break;
            let distance = i - trapStack[trapStack.length-1] -1;
            let water = (height[trapStack[trapStack.length-1]] > height[i] ? height[i] : height[trapStack[trapStack.length-1]]) - height[trap];
            result+= distance * water;
        }
        trapStack.push(i);
    }
    return result;
}

//Time complexity = O(n)
//Space complexity = O(1)
var trappingWater = function(height) {
    if (height.length <= 2) return 0;
    let leftPointer = 0;
    let rightPointer = height.length-1;
    let result = 0;
    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            let left_max = height[leftPointer];
            while (height[leftPointer] <= height[rightPointer]) {
                leftPointer++;
                if ( height[leftPointer] >= left_max) break;
                result += left_max - height[leftPointer];
            }
        } else {
            let right_max = height[rightPointer];
            while (height[rightPointer] <= height[leftPointer]) {
                rightPointer--;
                if ( height[rightPointer] >= right_max) break;
                result += right_max - height[rightPointer];
            }
        }
    }
    return result;
}

console.log(trappingWater([2,0,2,0,1]));
console.log(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trappingWater([4,2,0,3,2,5]));
console.log(trappingWater([0,101,0,100]));
console.log(trappingWater([0,2,1,0,2]));
console.log(trappingWater([0, 2, 0, 0, 2]));