//Cracking the code: Determine if a string has all unique characters. What if you cannot use additional data structures?

//With additional structure:
//Using dictionary
//Time complexity: O(n)
//Space complexity: O(n)
function isUniqueWithStructure (input) {
    process.stdout.write(input + ": ");
    let dict = {};
    for(let i = 0; i < input.length; i++) {
        if (dict[input[i]]) {
            return false;
        }
        dict[input[i]] = true;
    };
    return true;
}

//Without additional structure:
//Sort array and check if the previous was the same
//Time complexity: O(n log n)
//Space complexity: O(1)
function isUniqueWithoutStructure (input) {
    process.stdout.write(input + ": ");
    input = input.split('').sort().join('');
    if (input.length < 2) return true;
    for(let i = 0; i < input.length; i++) {
        if (input[i] == input[i-1]) {
            return false;
        }
    };
    return true;
}

function isUnique() {
    console.log("-With additional structure-");
    console.log(isUniqueWithStructure(""));
    console.log(isUniqueWithStructure("abcdefg"));
    console.log(isUniqueWithStructure("abdcab"));
    console.log(isUniqueWithStructure("abbac"));

    console.log("-Without additional structure-");
    console.log(isUniqueWithoutStructure(""));
    console.log(isUniqueWithoutStructure("abcdefg"));
    console.log(isUniqueWithoutStructure("abdcab"));
    console.log(isUniqueWithoutStructure("abbac"));
    console.log(isUniqueWithoutStructure("dakfoiac"));
    console.log(isUniqueWithoutStructure("ajdoiam"));
}

module.exports = {isUnique};