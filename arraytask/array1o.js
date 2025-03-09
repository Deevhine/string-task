function front11(a, b){
    let result = [];
     if (a[a.length] > 0) {
           result.push(a[0]);
     }
         if (b.length > 0) {
           result.push(b[0]);
         }
     return result

   }
   console.log(front11([1,2,3][2,3]))