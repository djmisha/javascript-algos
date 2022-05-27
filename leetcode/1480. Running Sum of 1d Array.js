/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Approach 1:  return the input array  

var runningSum = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (i != 0 ) {
      nums[i] = nums[i] + nums[i-1];
    }
  }
  return nums;
};


// Approach 2:  create new array  

var runningSum = function(nums) {
  let sums = [];
  for ( i = 0; i < nums.length; i ++ ) {
    if(i === 0) {
      sums.push(nums[i])
    } else {
      const addition = nums[i] + sums[i-1];
      sums.push(addition);
    }
  }
  return sums;
};
