#https://leetcode.com/problems/daily-temperatures/description/
#Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
#Example: Input: temperatures = [73,74,75,71,69,72,76,73] Output: [1,1,4,2,1,1,0,0]

#Solution: add unresolved value indexes to the stack and check if the following values are able to resolve the stack

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        result = [0] * len(temperatures)
        for i, temp in enumerate(temperatures):
            while stack and temp > temperatures[stack[-1]]:
                resolvedTempIndex = stack.pop()
                result[resolvedTempIndex] = i - resolvedTempIndex 
            stack.append(i)
        return result