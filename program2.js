function firstMissingPositive(nums) {
  nums.sort((a, b)=>a-b);
  let ans = 1;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] == ans)
          ans++;
  }
  return ans;
}

function smallestMissingPositiveInteger(nums) {
  // Filter out negative numbers and zero
  const positiveNums = nums.filter(num => num > 0);
  
  // Call the firstMissingPositive function to find the smallest missing positive integer
  return firstMissingPositive(positiveNums);
}

module.exports = smallestMissingPositiveInteger;
