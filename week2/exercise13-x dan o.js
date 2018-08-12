function xo(str) {
  // you can only write your code here!
  var index=str.length-1;
  var jmlhX=0;
  var jmlhO=0;
  while (index >= 0) {
    if (str[index]==='x') {
      jmlhX=jmlhX+1;
    }
    else if (str[index]==='o') {
      jmlhO=jmlhO+1;
    }
    index--;
  }
  if (jmlhX===jmlhO) {
    return true;
  }
  else if (jmlhX != jmlhO) {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
