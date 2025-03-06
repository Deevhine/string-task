function doubleChar(str){
    let ans = "";
   for(let i=0; i < str.length; i++){
     ans += str.charAt(i) + str.charAt(i)
     
   }
   return ans
  }
  console.log(doubleChar("divine"));

  function countHi(str){
    let count = 0;
      for(i=0; i<str.length;i++){
        let med = str.substring(i, i+2);
        if (med  == ("hi")){
           count ++;
           }
      }
      
      return count;
    }
    console.log(countHi("hihihi"));