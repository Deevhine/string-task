function samefirstlast (nums){
    if (nums[0] == 1 || nums[nums.length-1] == 1 ){
        return ("true")
    }else {
        return ("false")
    }
}
console.log(samefirstlast([1,2,3,2,1]))