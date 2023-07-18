var search = function (nums,target) {
    let start = 0,
        end = nums.length - 1,
        mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) return mid;
        //if mid is greater than end then target elem will always
        //lie in the right half of the array, so search in  mid+1 to end in next iteration
        //right portion
        if (nums[mid] >= nums[end]) {
            
            if(nums[mid] <= target && nums[end] >= target){
                start = mid +1;
                
            }
            else {
                end = mid -1; 
            }
            //left portion
        } else {
            if( nums[mid] >= target && nums[start] <=target) {
                start = mid + 1;
            }
            //if target is greater it will not lie on the right portion of the array, reduce end to an index before mid
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2],0))