
function smallestMissingPositiveInteger(nums) {
  nums = nums.filter(num => num > 0).sort((a, b) => a - b);

  if (nums[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1;
    }
  }

  return nums[nums.length - 1] + 1;
  module.exports = smallestMissingPositiveInteger;
}

function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer

}


