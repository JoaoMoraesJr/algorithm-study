#https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/description/
#Given an integer array nums, return the number of subarrays of length 3 such that the sum of the first and third numbers equals exactly half of the second number.
#Example: Input: nums = [1,2,1,4,1] Output: 1

class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return 0
        pointer = 2
        result = 0
        while (pointer < len(nums)):
            print (nums[pointer] + nums[pointer-2], nums[pointer-1]/2)
            if nums[pointer] + nums[pointer-2] == nums[pointer-1]/2:
                result += 1
            pointer += 1
        return result