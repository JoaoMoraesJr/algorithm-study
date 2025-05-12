#https://leetcode.com/problems/word-search/description/?envType=problem-list-v2&envId=depth-first-search
#Given an m x n grid of characters board and a string word, return true if word exists in the grid.
#The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
#Example 1: Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
#Example 2: Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB" Output: false

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        for i in range(0, len(board)):
            for j in range (0, len(board[0])):
                if (board[i][j] == word[0]):
                    if self.searchCell(board, i, j, word, 1, []):
                        return True
        return False
    
    def searchCell(self, board, i, j, word, currentPosition, visitedPositions):
        if (i, j) in visitedPositions:
            return False
        else:
            visitedPositions.append((i, j))
        if currentPosition >= len(word):
            return True
        foundWord = False
        if i+1 < len(board) and board[i+1][j] == word[currentPosition]:
            foundWord = foundWord or self.searchCell(board, i+1, j, word, currentPosition+1, visitedPositions)
        if i-1 >= 0 and board[i-1][j] == word[currentPosition]:
            foundWord = foundWord or self.searchCell(board, i-1, j, word, currentPosition+1, visitedPositions)
        if j+1 < len(board[0]) and board[i][j+1] == word[currentPosition]:
            foundWord = foundWord or self.searchCell(board, i, j+1, word, currentPosition+1, visitedPositions)
        if j-1 >= 0 and board[i][j-1] == word[currentPosition]:
            foundWord = foundWord or self.searchCell(board, i, j-1, word, currentPosition+1, visitedPositions)
        visitedPositions.pop()
        return foundWord

        