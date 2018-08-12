function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  /* algoritma
  1. ubah kalimat menjadi array words dan pisahkan dengan acuan " " (spasi).
    -split(" ");
  2. return panjang array words
  */
  var words=kalimat.split(" ");
  return words.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
