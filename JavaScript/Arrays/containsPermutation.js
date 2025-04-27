//LeetCode: Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
//In other words, return true if one of s1's permutations is the substring of s2.


//Time complexity: O (s1 + s1 * s2) = O(s1 * s2)
//Space Complexity: O(1) - Limited characters numbers
var checkInclusion = function (s1, s2) {
	function verifyPermutationWindow (hash, position) {
        hashLength = Object.values(hash).reduce((a, b) => a + b, 0);
		for (let i = position; i < position + hashLength; i++) {
			if (hash[s2[i]] && hash[s2[i]] > 0) {
				hash[s2[i]]--;
			} else {
				return false;
			}
		}
		let values = Object.values(hash);
		let isPermutation = true;
		for (let j = 0; j < values.length; j++) {
			if (values[j] != 0) {
			isPermutation = false;
				break;
			}
		}
		return isPermutation
	}

	let hash = {}
	if (s1.length > s2.length) return false;
	for (let i = 0; i < s1.length; i++) {
		hash[s1[i]]= hash[s1[i]] > 0 ? hash[s1[i]]+1 : 1;
	}
	for (let j = 0; j <= s2.length - s1.length; j++) {
		if (verifyPermutationWindow(Object.assign({}, hash), j)) {
            return true;
		}
	}
    return false;
}


//Using arrays
//Time complexity: O (s1 + s1 * s2) = O(s1 * s2)
//Space Complexity: O(1)
var checkInclusionArray = function (s1, s2) {
    function checkPermutation () {
        for (let i = 0; i <= arr1.length; i++) {
            if (arr1[i] != arr2[i]) return false
        }
        return true
    }

	let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

	if (s1.length > s2.length) return false;
	for (let i = 0; i < s1.length; i++) {
		arr1[s1.charCodeAt(i) - 97]++;
        arr2[s2.charCodeAt(i) - 97]++;
	}
	for (let i = 0; i <= s2.length - s1.length; i++) {
        if(checkPermutation()) return true;
        arr2[s2.charCodeAt(i)-97]--;
        arr2[s2.charCodeAt(i+s1.length)-97]++;
	}
    return false;
}



console.log (checkInclusion('ac', 'abca'));
console.log (checkInclusionArray('ao', 'eidbaooo'));