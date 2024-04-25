
let smallestMissingPositiveInteger = function(nums) {
  nums = nums.filter(num => num > 0);
  nums.sort((a, b) => a - b);
  
  if (nums[0] !== 1) {
    return 1;
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1;
    }
  }
  
  return nums[nums.length - 1] + 1;
};

function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer

}

module.exports = smallestMissingPositiveInteger;
