function lucky13(nums){
    for(i=0; i<nums.length; i++){
      if(nums[i] ===1 ||nums[i] ===3)
        return false
    }
    return true
  }
  console.log(lucky13([1,3,0]))