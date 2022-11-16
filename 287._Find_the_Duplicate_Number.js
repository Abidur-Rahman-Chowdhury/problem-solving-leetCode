var findDuplicate = function (nums) {
  let freq = {};

  for (const n of nums) {
    if (n in freq) {
      return n;
    } else {
      freq[n] = 1;
    }
  }
};
