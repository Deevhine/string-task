function findLowestIndex(nums){
    return nums.indexOf(Math.min(...nums));
  }
  console.log(findLowestIndex([15, 2, 10, 5]));