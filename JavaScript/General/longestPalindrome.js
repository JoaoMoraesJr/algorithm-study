//Leetcode: Longest Palindromic Substring - https://leetcode.com/problems/longest-palindromic-substring/description/
//Given a string s, return the longest palindromic substring in s.
//Input: s = "babad"
//Output: "bab"


//Brute Force = O(n³)
//For each character k until n - k > biggest palindrome found
//Scan from n to k if there is a palindrome
var longestPalindromeBruteForce = function(s) {
    let currentPalindrome = '';
    let biggestPalindrome = '';
    let isPalindrome = true;
    if (s.length == 1) return s;
    for (let i = 0; i < s.length; i++) {
        if (s.length - i < biggestPalindrome.length) return biggestPalindrome;
            for (let j = s.length-1; j > i; j--) {
                let leftPointer = i;
                let rightPointer = j;
                isPalindrome = true;
                while (leftPointer < rightPointer) {
                    if (s[leftPointer] == s[rightPointer]) {
                        leftPointer++;
                        rightPointer--;
                    } else {
                        isPalindrome = false
                        break;
                    }
                }
                if (isPalindrome) {
                    currentPalindrome = s.substring(i, j+1);
                    if (currentPalindrome.length > biggestPalindrome.length) {
                        biggestPalindrome = currentPalindrome;
                    }
                }
            }
    }
    if (biggestPalindrome.length < 2) return s[0];
    return biggestPalindrome;
};

//Expand on center = O(n²)
//There are 2 types of palyndromes: bab and baab
//Expand from each type of center
var longestPalindrome = function(s) {
    function expandCenter (left, right) {
        while (left >= 0 && right < s.length) {
            if (s[left] != s[right]) break;
            left--;
            right++;
        }
        return right-left-1;
    }
    
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandCenter(i, i);
        let len2 = expandCenter(i, i+1);
        let len = Math.max(len1, len2);
        if (len > end-start) {
            start = i-Math.floor((len-1)/2);
            end = start+len;
        }
    }
    return s.substring(start, end);
};

console.log(longestPalindromeBruteForce("babad"));
console.log(longestPalindrome("babad"));