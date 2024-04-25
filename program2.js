function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
      if (nums[i] > 0 && nums[i] <= n) {
          const index = nums[i] - 1;
          if (nums[index] > 0) {
              nums[index] = -nums[index];
          }
      }
  }

}

module.exports = smallestMissingPositiveInteger;
