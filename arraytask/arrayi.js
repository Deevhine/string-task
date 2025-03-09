function firstlast6 (nums) { 
    return nums[0]  == 6 || nums[nums.length-1] == 6;
}
console.log(firstlast6([1,2,3,4,2,6,0]))