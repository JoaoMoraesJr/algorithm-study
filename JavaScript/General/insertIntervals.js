//Leetcode - Insert Interval (Medium) - https://leetcode.com/problems/insert-interval/description/
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

//Time Complexity = O(n)
//Space Complexity = O(n)
var insert = function(intervals, newInterval) {
    if(intervals.length == 0) return [newInterval];
    let startIndex = 0;
    let endIndex = intervals.length-1;
    let startArray = [];
    let endArray = [];
    while ((intervals[startIndex] && intervals[endIndex]) && (newInterval[0] > intervals[startIndex][1] || newInterval[1] < intervals[endIndex][0])) {
        console.log(startIndex, endIndex);
        if (newInterval[0] > intervals[startIndex][1]) {
            startArray.push(intervals[startIndex]);
            startIndex++;
        }
        if (newInterval[1] < intervals[endIndex][0]) {
            endArray.push(intervals[endIndex]);
            endIndex--;
        }
    }
    console.log(startIndex, endIndex);
    if (startIndex > endIndex) {
        startArray.push(newInterval);
    } else {
        let startInterval = intervals[startIndex][0];
        let endInterval = intervals[endIndex][1];
        if (newInterval[0] < startInterval) startInterval = newInterval[0];
        if (newInterval[1] > endInterval) endInterval = newInterval[1];
        startArray.push([startInterval, endInterval]);
    }
    while(endArray.length > 0) {
        startArray.push(endArray.pop());
    }
    return startArray;
    
};

console.log(insert([[1,3],[6,9]], [2,5]));