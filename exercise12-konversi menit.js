function konversiMenit(menit) {
  // you can only write your code here!
  var detik = 60;
  var jmlhMenit=0;
  while(menit>=detik){
     menit=menit-detik;
     jmlhMenit=jmlhMenit+1;
  }
  if (menit==0) {
    return jmlhMenit+':'+'00'
  }
  else if (menit<10){
    return jmlhMenit+':'+'0'+menit;
  }
  else {
    return jmlhMenit+':'+menit;
  }

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
