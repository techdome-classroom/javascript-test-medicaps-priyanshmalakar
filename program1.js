function longestSubstring(s) {
    let maxlen = 0;
    let start = 0;
    let indexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (charIndexMap[currentChar] >= start) {
            start = indexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
