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

  const positiveNums = nums.filter(num => num > 0);
  

  return firstMissingPositive(positiveNums);
}

module.exports = smallestMissingPositiveInteger;
