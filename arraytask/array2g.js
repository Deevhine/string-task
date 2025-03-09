function more14(nums){
    let ones = 0;
   let fours = 0;
   
   for (let num of nums) {
     if (num === 1) {
       ones++;
     } else if (num === 4) {
       fours++;
     }
   }
   
   return ones > fours;
  
 }
 console.log(more14([1,1,1,1,1,1,4]))