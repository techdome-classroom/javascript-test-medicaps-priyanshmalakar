// smallestMissingPositiveInteger.js

function smallestMissingPositiveInteger(nums) {
  // Helper function to swap elements in an array
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  // Arrange the positive integers to the left side of the array
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      swap(nums, i, j);
      i++;
    }
  }

  // Iterate through positive integers and mark their presence
  for (let j = 0; j < i; j++) {
    const index = Math.abs(nums[j]) - 1;
    if (index < i) {
      nums[index] = -Math.abs(nums[index]);
    }
  }

  // Find the smallest missing positive integer
  let smallestMissing = i + 1;
  for (let j = 0; j < i; j++) {
    if (nums[j] > 0) {
      smallestMissing = j + 1;
      break;
    }
  }

  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
