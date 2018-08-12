function pasanganTerbesar(num) {
  // you can only write your code here!
  /* algoritma
  1. ubah num menjadi string
  2. ubah num menjadi array dan ditampung pada array number dimana 1 index hanya menampung 1 karakter
  3. lakukan looping sebanyak panjang array -2
  4.buat variabel coupleMax=0;
  5. tampung nilai array index[i] dan index array[i+1] didalam variabel var banding dan jadikan number;
  6. ubah var banding dan var coupleMax
  7. bandingkan var banding dan var coupleMax, nilai terbesar mengisi var coupleMax
  8. return nilai coupleMax
  */
  var numbers=num.toString().split("");
  var coupleMax=0;
  var banding;
  for(var i=0; i<=numbers.length-2;i++){
    Number(banding=numbers[i]+numbers[i+1]);
    if(banding>=coupleMax){
      coupleMax=banding;
    }
  }
  return Number(coupleMax);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
