class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        i = 2
        while i < len(arr):
            num1 = arr[i-2]
            num2 = arr[i-1]
            num3 = arr[i]
            if num1 % 2 != 0 and num2 % 2 != 0 and num3 % 2 != 0:
                return True
            i += 1
        return False
        

'''
Leetcode URL: https://leetcode.com/problems/three-consecutive-odds/description/
1550. Three Consecutive Odds
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
'''