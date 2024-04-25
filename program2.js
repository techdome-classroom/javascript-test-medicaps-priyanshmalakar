function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  // Mark elements that are within the range of 1 to n
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0 && nums[i] <= n) {
          const index = nums[i] - 1;
          // Mark presence by making the element negative
          if (nums[index] > 0) {
              nums[index] = -nums[index];
          }
      }
  }

  // Find the smallest missing positive integer
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }

  // If all elements are negative, return n + 1
  return n + 1;
}

module.exports = smallestMissingPositiveInteger;
