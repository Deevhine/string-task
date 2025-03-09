function no23(nums){
    for (let num of nums) {
        if (num === 2 || num === 3) return false;
    }
    return true;
    
}
console.log(no23([1,2]))