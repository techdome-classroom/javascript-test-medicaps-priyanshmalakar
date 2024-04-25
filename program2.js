let smallestMissingPositiveInteger = function(nums) {
  nums = nums.filter(num => num > 0).sort((a, b) => a - b);

  if (nums[0] !== 1 || !nums.length) {
    return 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1;
    }
  }

  return nums[nums.length - 1] + 1;
};
