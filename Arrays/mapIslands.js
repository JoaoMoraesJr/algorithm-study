
//LeetCode: Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

//Using hash
//Time Complexity: O(n)
//Space Complexity: ?? Grid being replicated on stacks?
let hash = {};
var numIslands = function(grid) {
    hash = {};
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1 && !hash[i+'-'+j]) {
                mapIsland(grid, i, j);
                islands++;
            }
        }
    }
    return islands;
};

var mapIsland = function (grid, i, j) {
    if (i >= 0 && j >= 0 && i < grid.length && j<grid[i].length && grid[i][j] == 1 && !hash[i+'-'+j]) {
        hash[i+'-'+j] = true;
        mapIsland (grid, i, j+1);
        mapIsland (grid, i, j-1);
        mapIsland (grid, i+1, j);
        mapIsland (grid, i-1, j);
    }
    return hash;
}


//Without using addition structure: Replacing 1's with 0's after verification.
//Time Complexity: O(n)
//Space Complexity: O(n) DFS stack

var numIslandsReplacing = function(grid) {
    function mapIslandReplacing (i, j) {
        if (i >= 0 && j >= 0 && i < grid.length && j<grid[i].length && grid[i][j] == 1) {
            grid[i][j] = 0;
            mapIslandReplacing (i, j+1);
            mapIslandReplacing (i, j-1);
            mapIslandReplacing (i+1, j);
            mapIslandReplacing (i-1, j);
        }
    }
    
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                mapIslandReplacing(i, j);
                islands++;
            }
        }
    }
    return islands;
};


console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
console.log(numIslands([["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]));
console.log(numIslandsReplacing([["1","0","0","1","1","1","0","1","1","0","0","0","0","0","0","0","0","0","0","0"],["1","0","0","1","1","0","0","1","0","0","0","1","0","1","0","1","0","0","1","0"],["0","0","0","1","1","1","1","0","1","0","1","1","0","0","0","0","1","0","1","0"],["0","0","0","1","1","0","0","1","0","0","0","1","1","1","0","0","1","0","0","1"],["0","0","0","0","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0"],["1","0","0","0","0","1","0","1","0","1","1","0","0","0","0","0","0","1","0","1"],["0","0","0","1","0","0","0","1","0","1","0","1","0","1","0","1","0","1","0","1"],["0","0","0","1","0","1","0","0","1","1","0","1","0","1","1","0","1","1","1","0"],["0","0","0","0","1","0","0","1","1","0","0","0","0","1","0","0","0","1","0","1"],["0","0","1","0","0","1","0","0","0","0","0","1","0","0","1","0","0","0","1","0"],["1","0","0","1","0","0","0","0","0","0","0","1","0","0","1","0","1","0","1","0"],["0","1","0","0","0","1","0","1","0","1","1","0","1","1","1","0","1","1","0","0"],["1","1","0","1","0","0","0","0","1","0","0","0","0","0","0","1","0","0","0","1"],["0","1","0","0","1","1","1","0","0","0","1","1","1","1","1","0","1","0","0","0"],["0","0","1","1","1","0","0","0","1","1","0","0","0","1","0","1","0","0","0","0"],["1","0","0","1","0","1","0","0","0","0","1","0","0","0","1","0","1","0","1","1"],["1","0","1","0","0","0","0","0","0","1","0","0","0","1","0","1","0","0","0","0"],["0","1","1","0","0","0","1","1","1","0","1","0","1","0","1","1","1","1","0","0"],["0","1","0","0","0","0","1","1","0","0","1","0","1","0","0","1","0","0","1","1"],["0","0","0","0","0","0","1","1","1","1","0","1","0","0","0","1","1","0","0","0"]]));