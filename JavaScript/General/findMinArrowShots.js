//Leetcode - Minimum Number of Arrows to Burst Balloons (Medium) - https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

//Solutions for this problem need optimization (alternative: sort input).

var findMinArrowShots = function(points) {
    let groups = [];
    for (let i = 0; i < points.length; i++) {
        let isGrouped = false;
        let biggestGroupIndex = 0;
        let biggestGroupSize = 0;
        for (let j = 0; j < groups.length; j++) {
            console.log(points[i][0], '-', points[i][1], ' ', groups[j][0], '-', groups[j][1]);
            if ((points[i][0] >= groups[j][0] && points[i][0] <= groups[j][1]) 
             || (points[i][1] >= groups[j][0] && points[i][0] <= groups[j][1])) {
                if (Math.min(groups[j][1], points[i][1]) - Math.max(groups[j][0], points[i][0]) > biggestGroupSize) {
                    biggestGroupSize = Math.min(groups[j][1], points[i][1]) - Math.max(groups[j][0], points[i][0]);
                    biggestGroupIndex = j;
                }
                //groups[j][0] = Math.max(groups[j][0], points[i][0]);
                //groups[j][1] = Math.min(groups[j][1], points[i][1]);
                isGrouped = true;
                //break;
            }
        }
        if (isGrouped) {
            groups[biggestGroupIndex][0] = Math.max(groups[biggestGroupIndex][0], points[i][0]);
            groups[biggestGroupIndex][1] = Math.min(groups[biggestGroupIndex][1], points[i][1]);
        }
        if (!isGrouped) {
            groups.push(points[i]);
        }
        console.log(groups);
    }
    return groups.length;
};

var findMinArrowShots2 = function(points) {
    function getIntersections () {
        let intersections = {}
        for (let i = 0; i < points.length; i++) {
            for (let j = points[i][0]; j <= points[i][1]; j++) {
                if(intersections[j] != null) {
                    intersections[j]++;
                } else {
                    intersections[j] = 1;
                }
            }
        }
        return intersections;
    }

    let intersections = getIntersections();
    let arrows = 0;
    while (Object.keys(intersections).length > 0) {
        arrows++;
        let biggestIntersection = 0;
        let biggestIntersectionIndex = 0;
        for (const[key, value] of Object.entries(intersections)) {
            if (intersections[key] > biggestIntersection) {
                biggestIntersection = value;
                biggestIntersectionIndex = parseInt(key);
            }
        }
        for (let i = 0; i < points.length; i++) {
            if (biggestIntersectionIndex >= points[i][0] && biggestIntersectionIndex <= points[i][1]) {
                points.splice(i, 1);
                i--;
            }
        }
        intersections = getIntersections();
    }
    return arrows;
};

console.log(findMinArrowShots2([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]])); //Expect 2
console.log(findMinArrowShots2([[1,2147483647]]));