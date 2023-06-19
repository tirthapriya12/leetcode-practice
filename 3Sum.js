/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //apply same binary search logic as 2sum, sort the array and start searching for 2sums for every index in array.
 var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    const result=[];
    for(let i=0;i<nums.length;i++){
        //we don't want duplicate results so skip same numbers, since they are sorted they will exist nxt to each other
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        
      let  p1= i+1; //left pointer
      let  p2= nums.length-1; //right pointer
        while(p1<p2){
            sum = nums[p1] + nums[p2] + nums[i];

            if(sum > 0){
                p2--
            }
            else if(sum<0){
                p1++;
            }
            else{
                //push the result to array and keep search for next possible solutions
                result.push([nums[i],nums[p1],nums[p2]]);
                p1++;
                p2--;
                //if u may  find duplicates again in sub ranges skip them
                while(nums[p1]===nums[p1-1] && p1<p2){
                    p1++;
                }
            }
        }
    }
    return result
};