

function smallestMissingPositiveInteger(nums) {


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
}

module.exports = smallestMissingPositiveInteger;
