function countEvens(nums){
    let count = 0;
    for (let num of nums) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvens([2,3,5,6,8,12]))