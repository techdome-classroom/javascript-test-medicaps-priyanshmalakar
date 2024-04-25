function smallest_missing_positive_integer(nums) {
  // Create a set to store positive integers
  const numSet = new Set();

  // Add positive integers to the set
  for (const num of nums) {
      if (num > 0) {
          numSet.add(num);
      }
  }


  let smallestMissing = 1;
  while (numSet.has(smallestMissing)) {
      smallestMissing++;
  }

  return smallestMissing;
}

module.exports = smallest_missing_positive_integer;
