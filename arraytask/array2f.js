function sum28(nums) {
    return nums.filter(num => num === 2).reduce((sum, num) => sum + num, 0) === 8;
  }
  console.log(sum28([2, 3, 8, 6])); 