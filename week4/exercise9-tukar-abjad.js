function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lower=upper.toLowerCase();
  var result='';
  for(var i=0;i<kalimat.length;i++){
    var ketemu=false;
    for(var j=0; j<upper.length;j++){
      if(kalimat[i]===upper[j]){
        result=result+lower[j]
        ketemu=true;
        break;
      }
      else if (kalimat[i]===lower[j]) {
        result=result+upper[j]
        ketemu=true;
        break;
      }
      else {
        ketemu=false;
      }
    }
    if(ketemu===false){
      result=result+kalimat[i];
    }

  }

  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
