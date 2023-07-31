/**
 * @param {number[]} nums 
 * @return {number}
 */
//: ex: [1,2,3,4,3,5] -> numbers will range from 1->n, 
//i.e for every index 1->n there must be one number in the array
//Approach: use tortoise Hare method to find the loop(duplicate existence ) first and then find the duplicate
var findDuplicate = function(nums) {
    let slow = 0;
    let fast =0;
    let hasDuplicate = false;

//check if duplicate exist
    while(true){
        slow= nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) {
           hasDuplicate = true;
           break;
        }
      
    }
    //find duplicate
    let slow2=0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow == slow2) {
            break;
        }
    }
    return slow;
};