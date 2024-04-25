function smallest_missing_positive_integer(nums) {
  // Remove non-positive integers and duplicates
  nums = Array.from(new Set(nums.filter(num => num > 0)));

  // If nums is empty, return 1
  if (nums.length === 0) return 1;

  // Sort the array
  nums.sort((a, b) => a - b);

  // If the first element is not 1, return 1
  if (nums[0] !== 1) return 1;

  // Find the smallest missing positive integer
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] - nums[i] > 1) {
          return nums[i] + 1;
      }
  }

  // If all integers from 1 to the maximum in nums are present, return the next integer
  return nums[nums.length - 1] + 1;
}

module.exports = smallest_missing_positive_integer;
