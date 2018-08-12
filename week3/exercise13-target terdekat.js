function targetTerdekat(arr) {
  // you can only write your code here!
  var oPosition;
  for(var position=0; position<arr.length;position++){
    if(arr[position]==='o'){
      oPosition=position;
    }
  }

  var xKiri=-1;
  var xKanan=arr.length;
  for(var x=0; x<arr.length; x++){
    if(arr[x]==='x' && x<oPosition && x>xKiri){
      xKiri=x;
    }
    else if(arr[x]==='x' && x>oPosition && x<xKanan){
      xKanan=x;
    }
  }

  if(xKiri>=0 && xKanan !== arr.length){
    var jarakKiri=oPosition-xKiri;
    var jarakKanan=xKanan-oPosition;
    if (jarakKiri <= jarakKanan) {
      return jarakKiri;
    }
    else {
      return jarakKanan;
    }
  }
  else if(xKiri >= 0 ){
    var jarakKiri=oPosition-xKiri;
    return jarakKiri;
  }
  else if (xKanan !== arr.length) {
    var jarakKanan=xKanan-oPosition;
    return jarakKanan;
  }
  else {
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
