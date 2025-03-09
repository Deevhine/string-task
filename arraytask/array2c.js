function bigDiff(nums){
    return Math.max(...nums) - Math.min(...nums);
  }
  console.log(bigDiff([2,7,3,14,12]))