//Leetcode - Longest Path With Different Adjacent Characters (Hard) - https://leetcode.com/problems/longest-path-with-different-adjacent-characters/
// You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root, parent[0] == -1.
// You are also given a string s of length n, where s[i] is the character assigned to node i.
// Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.

var longestPath = function(parent, s) {
    function dfs(n, size) {
        let sizes = [];
        if (parentDict[n]) {
            for (let i = 0; i < parentDict[n].length; i++) {
                if (s[parentDict[n][i]] != s[n]) {
                    sizes.push(dfs(parentDict[n][i], size+1));
                }else{
                    dfs(parentDict[n][i], 0);    
                }
            }
        }
        if (sizes.length == 0) {
            nodeSizes[n] = 1;
            return size;
        }
        sizes.sort((a, b) => a-b);
        let biggest = sizes.pop();
        if (sizes.length >= 1) {
            let secondBiggest = sizes.pop();
            nodeSizes[n] = biggest + secondBiggest + 1;
        }
        else nodeSizes[n] = biggest+1;
        console.log(n, biggest);
        return biggest;
    }
    if (parent.length == 1) return 1;
    let parentDict = {};
    for (let i = 0; i<parent.length; i++) {
        if (parentDict[parent[i]]) parentDict[parent[i]].push(i);
        else parentDict[parent[i]] =  [i];
    }
    console.log(parentDict);
    let nodeSizes = [];
    dfs(0,0);
    nodeSizes.sort((a, b) => a-b);
    console.log(nodeSizes);
    return nodeSizes.pop();
};

console.log(longestPath([-1,0,0,1,1,2], "abacbe"));