function cariPelaku(str) {
    var hasil =str.match(/abc/g);
    return hasil.length;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3s
  console.log(cariPelaku('babcbacabc')); // 2