function longestSubstring(s) {
    let maxlen = 0;
    let start = 0;
    let indexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (indexMap[currentChar] >= start) {
            start = indexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        maxlen = Math.max(maxlen, end - start + 1);
    }

    return maxlen;
}

module.exports = { longestSubstring };
