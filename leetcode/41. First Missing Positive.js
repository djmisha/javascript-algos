 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  	// console.log(nums);
    // first loop sets any negatives to 0, since we only care about intergers
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            nums[i] = 0;
        }
    }
  	// console.log(nums);
    // second loop moves looks at `current` value, 
  	// check IF value is outside of array length  if current > nums.length + 1 dont do anything 
    // then and sets the `current-1` index value to be negative,
    // which marks it as `current' as existing in array 
    for (var i = 0; i < nums.length; i++) {
      	const val = Math.abs(nums[i]);
      	// if greater then 1 and in the range of the array
      	if (1 <= val && val <= nums.length) {
          if (nums[val - 1] > 0) {
            nums[val - 1] = nums[val - 1] * -1
          } else if (nums[val - 1] === 0) {
            nums[val - 1] = -1 * (nums.length + 1)
          }
        }
    }
  	// console.log(nums);
  
    // check if number at the index+1 is negative -  
    // if IS return  
    // else increment by 1 and repeat 
    for (var i = 1; i <= nums.length + 1; i++) {
        if (nums[i - 1] >= 0) {
						return i;
        } 
    }
    return nums.length + 1;
};
