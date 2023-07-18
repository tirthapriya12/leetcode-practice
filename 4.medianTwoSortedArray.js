
/**
 * Approach: merge the 2 arrays and find the median  O(m+n) complexity (not best)
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0,j=0;
    let merged = []
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            merged.push(nums1[i])
            i++;
        }
        else{
            merged.push(nums2[j]);
            j++;
        }
    }

    while(i<nums1.length) {
        merged.push(nums1[i]);
        i++;
    }
    while(j<nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    if(merged.length%2==0){
        return (merged[merged.length/2] + merged[(merged.length/2)-1])/2;
    }else {
        return merged[Math.floor(merged.length/2)];
    }
   
};

findMedianSortedArrays([1,2],[3,4]);