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

    function countCode(str) {
        let count = 0;
        for (let i = 0; i < str.length - 3; i++) {
          if (str.substring(i, i + 2) === "co" && str[i + 3] === "e") {
            count++;
          }
        }
        return count;
      }
      console.log(countCode("codexxcode"));

//       Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true

function endOther(a, b){
    let aLower = a.toLowerCase();
  let bLower = b.toLowerCase();
  
  return aLower.endsWith(bLower) || bLower.endsWith(aLower);

}
console.log(endOther('Hiabc', 'abc'));


// Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

// Examples

// wordEnds('abcXY123XYijk', 'XY') → c13i
// wordEnds('XY123XY', 'XY') → 13
// wordEnds('XY1XY', 'XY') → 11

function wordEnds(str, word){
    let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + word.length) === word) {
      if (i > 0) result += str[i - 1];
      if (i + word.length < str.length) result += str[i + word.length];
    }
  }
  return result;
}

console.log(wordEnds('abcXY123XYijk', 'XY'));

function plusOut(str, word){
    let result = "";
    let i = 0;
    while (i < str.length) {
      if (str.substring(i, i + word.length) === word) {
        result += word;
        i += word.length;
      } else {
        result += "+";
        i++;
      }
    }
    return result;
    
  }
  console.log(plusOut('123abcXY456', 'XY'));

  function repeatFront(str, n){
    let result = "";
   for (let i = n; i > 0; i--) {
     result += str.substring(0, i);
   }
   return result;
 }
 console.log(repeatFront('Hello', 3));

 function repeatEnd(str, n){
    let endStr = str.substring(str.length - n);
    let result = "";
    for (let i = 0; i < n; i++) {
      result += endStr;
    }
    return result;
  }
  console.log(repeatEnd('Hello', 3));

  function xyBalance(str) {
    let lastXIndex = -1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
        lastXIndex = i;
      } else if (str[i] === 'y' && lastXIndex !== -1) {
        lastXIndex = -1;
      }
    }
    return lastXIndex === -1;
  }
  console.log(xyBalance('xy'));

  function mixStrings(a, b) {
    let result = "";
    let maxLength = Math.max(a.length, b.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < a.length) result += a[i];
      if (i < b.length) result += b[i];
    }
    return result;
  }
  console.log(mixStrings('abc', 'def'));


  function conCat(a, b){
    if (a.length === 0 || b.length === 0) return a + b;
    if (a[a.length - 1] === b[0]) return a + b.substring(1);
    return a + b;
  }
  
  console.log(conCat('abc', 'def'));

  function lastTwo(str){
    if (str.length < 2) return str;
   return str.substring(0, str.length - 2) + str[str.length - 1] + str[str.length - 2];
 }
 console.log(lastTwo('Hello'));