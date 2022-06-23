/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let wateringCan = capacity;
    let steps = 1;

    for (i = 0; i < plants.length; i++) {
    	wateringCan = wateringCan - plants[i];
        if(plants[i + 1]) {
		    steps = steps + 1;
        }
    	if (wateringCan < plants[i + 1]) {
    		steps = steps + ((i+1) * 2);
    		wateringCan = capacity;
    	}  
    }
    return steps
};

/*
https://leetcode.com/problems/watering-plants/
Approach
let steps = 1 for first step. 
let wateringCan = capacity
iterate throught plants array at each plants[i] 
	increment steps +1 
	check if there is enough in wateringCan to wanter plants[i +1] 
	if enough - subtract plants[i] value from wateringCan, and continue
	else - take steps back to refill water can, and steps back to current plant[i]
		steps =  steps + ((i+1) * 2);
		wateringCan = capacity
		water the current plan and subrtact its value from wateringCan  
		wateringCan - plant[i]	
return steps

O(n) - time
O(1) - space
*/
