function ubahHuruf(kata) {
  // you can only write your code here!
  /*
  1. temukan angka pada index berapa
  */
  var kamus='abcdefghijklmnopqrstuvwxyz'
  var temp=''
  for(var i=0;i<kata.length;i++){
    for(var j=0;j<kamus.length;j++){
      if(kata[i]===kamus[j]){
        if(j===25){
          temp=temp+kamus[0]
          break;
        }
        else {
          temp=temp+kamus[j+1]
          break;
        }
      }
    }
  }
  return temp;

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
