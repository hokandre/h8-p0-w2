console.log('SOAL NOMOR 1 : Menyusun Barisan Bintang');
var row=5;
for (var i=0; i<row; i++){
  console.log('*');
}

console.log('SOAL NOMOR 2 : MENYUSUN BARISAN BINTANG NESTED LOOPING');
var row2=5;
for (var i = 0; i<row2; i++){
  var bintang='';
  for (var a = 0; a < row2; a++) {
    var bintang=bintang+'*';
  }
  console.log(bintang);
}

console.log('SOAL NOMOR 3 : Menyusun Barisan Tangga Bintang Dengan Nested Looping');
row3=5;
for (var i = 0; i < row3; i++) {
  var bintang='';
  for (var a = 0; a < i+1;a++) {
    bintang=bintang+'*';
  }
  console.log(bintang);
}
