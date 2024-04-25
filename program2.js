function smallestMissingPositiveInteger(nums) {
  // First, filter out the numbers that are not positive or not integers
  const positiveIntegers = nums.filter(num => num > 0 && num % 1 === 0);

  // Sort the remaining positive integers in ascending order
  positiveIntegers.sort((a, b) => a - b);

  // Initialize the smallest missing positive integer as 1
  let smallestMissing = 1;

  // Iterate through the sorted positive integers
  for (const num of positiveIntegers) {
    // If the current number is equal to the smallest missing positive integer,
    // increment the smallest missing positive integer by 1
    if (num === smallestMissing) {
      smallestMissing++;
    }
    // If the current number is greater than the smallest missing positive integer,
    // return the smallest missing positive integer
    else if (num > smallestMissing) {
      return smallestMissing;
    }
  }

  // If all the numbers in the list are greater than or equal to the smallest missing positive integer,
  // return the smallest missing positive integer
  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;