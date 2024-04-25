
newNums.sort((a, b) => a - b);

for (let i = 0; i < newNums.length; i++) {
  if (newNums[i] > min) {
    return min;
  }
  if (newNums[i] === min) {
    min++;
  }
}

return min;
function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
let newNums = nums.filter((num) => num > 0);
let min = 1; 


}

module.exports = smallestMissingPositiveInteger;
