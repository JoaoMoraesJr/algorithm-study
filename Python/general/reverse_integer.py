class Solution:
    def reverse(self, x: int) -> int:
        num = str(x)
        revertedNum = ""
        for i in range(len(num)-1, -1, -1):
            if num[i] == '-':
                revertedNum = '-' + revertedNum
            else:
                revertedNum += num[i]
        response = int(revertedNum)
        if (response < -2**31 or response > 2**31 - 1):
            return 0
        return response
    
'''
Leetcode URL: https://leetcode.com/problems/reverse-integer/description/
7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
'''