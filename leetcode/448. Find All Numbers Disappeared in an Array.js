// 448. Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for ( i = 0; i < nums.length; i++ ) {
      const current = Math.abs(nums[i])
      const moveToIndex = current - 1
      nums[moveToIndex] = -(Math.abs(nums[moveToIndex]))
    }
    let result = [];
    for (var i = 0; i < nums.length; i++) {
    	if( nums[i] > 0) {
    		result.push(i+1)
    	}
    }
    return result;
};


/*
1. Mark Exisiting Numbers 
	- loop through nums and look at value of index 
	- move it to its location with mapping:(index - 1) 
	- and mark it by making it by negative value 

2. Loop throught array
	- create new array 
	- add any number to the new array that is n < 0
	- return new array 
*/
