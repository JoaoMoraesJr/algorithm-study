//Leetcode: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    let startPosition = 0;
	let endPosition = s.length-1;
	while (startPosition < s.length) {
		while (s[startPosition] && !isLetterOrDigit(s[startPosition])) {
			startPosition++;
		}
		while (s[endPosition] && !isLetterOrDigit(s[endPosition])) {
			endPosition--;
		}
        if (s[startPosition] && s[endPosition]) {
            if (s[startPosition].toLowerCase() == s[endPosition].toLowerCase()) {
                startPosition++;
                endPosition--;
		    } else return false;
        }
	}
	return true;
};

var isPalindromeReplacing = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    for (let i = 0; i < s.length/2; i++) {
        if (s[i].toLowerCase() != s[s.length - i - 1].toLowerCase()) {
            return false;
        }
    }
    return true;
}

var isAlphanumeric = function (str) {
  return str.match("^[a-zA-Z0-9]*$") !== null;
}

var isLetterOrDigit = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}

console.log(isPalindrome("ab, c ba!"));
console.log(isPalindromeReplacing("ab, c ba!"));