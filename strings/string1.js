// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples

// makeAbba('Hi', 'Bye') → HiByeByeHi

function makeAbba(a, b){
    return a + "" + b+ "" +b + "" + a;
  }
  console.log(makeAbba('Hi', 'Bye')); 


//   Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

// Examples

// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab

// function extraEnd(str){
//     let stringelements = str.slice(0).slice(-2);
//      return stringelements.repeat(3)
//    }
//    console.log(extraEnd('Hello'));

//    Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

// Examples

// firstTwo('Hello') → He
// firstTwo('abcdefg') → a

function firstTwo(str){
    return str.slice(0,2)
  }
console.log(firstTwo('Hello'))

// String-1 -- firstHalf
// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

// firstHalf('WooHoo') → WooHoo
// firstHalf('HelloThere') → HelloThere
// firstHalf('abcdefg') → abcdefg

function firstHalf(str){
    return str.slice( str.lenght / 2)
  }
  console.log(firstHalf('WooHoo'))

//   String-1 -- withoutEnd
// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

function withoutEnd(str){
    return str.slice(1, -1)
  }
  console.log(withoutEnd('Hello'))

//   String-1 -- comboString
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

// Examples

// comboString('Hello', 'hi') → hiHellohi
// comboString('Hi', 'Hello') → HiHelloHi
// comboString('aaa', 'b') → baaab

function comboString(a, b){
    if(a.length < b.length ){
    return a + b + a
    }else(b.lenght < a.lenght)
      return b + a + b
    
  }
  console.log(comboString('hey','hi'))

//   String-1 -- nonStart
// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a, b){
    let element = a.slice(1) + b.slice(1)
    return element
  }
console.log(nonStart('java','code'))

// String-1 -- left2
// Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

// Examples

// left2('Hello') → lloHe
// left2('java') → vaja
// left2('Hi') → Hi

function left2(str){
    if(str.length <=2){
    return str
    }
    let firstTwo = str[0]+""+str[1];
    return str.slice(2)+firstTwo
}
console.log(left2("left"))

// String-1 -- right2
// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi

function right2(str){
    return str.slice(-2) + str.slice(0, -2)
  }
  console.log(right2("hello"))

//   String-1 -- theEnd
// Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

// Examples

// theEnd('Hello', true) → H
// theEnd('Hello', false) → o
// theEnd('oh', true) → o

function theEnd(str, front){
    if (front) {
      return str.slice(0, 1);
    }else {
      return str.slice(str.length -1);
    }
}
console.log(theEnd("hollandia"));


// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

// Examples

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →

function withoutEnd2(str){
    
    if (withoutend = str.substring(1, str.length).slice(0,-1)){
    return withoutend;
    }
    else (str= str.slice(0,-1).substring(1, str.length))
    return str;
  }
  console.log(withoutEnd("hello"));

//   Given a string, return true if it ends in "ly".

// Examples

// endsLy('oddly') → true
// endsLy('y') → false
// endsLy('oddl') → false

function endsLy(str){
    return str.substring(str.length - 2) === "ly";
  }
  console.log(endsLy("bably"));

//   String-1 -- twoChar
// Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

// Examples

// twoChar('java', 0) → ja
// twoChar('java', 2) → va

function twoChar(str, index){
    if (index < 0 || index > str.length -2 ){
      return str.substring(0,2);
    }
    return str.substring(index, index + 2);
  }
  console.log(twoChar("java",  3));

//   String-1 -- atFirst
// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

// Examples

// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@

function atFirst(str){
    if(str.length >= 2){
      return str.substring(0,2);
    } else if (str.length == 1){
      return str + "@" ;
    } else {
      return "@@";
    }
   }
   console.log(atFirst("Hello"));