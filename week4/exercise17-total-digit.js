function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaString=angka.toString();
    if(angkaString.length===0){
        return 0;
    }
    else{
        var digit= parseInt(angkaString[0])
        var modified=angkaString.substring(1);
        return digit+totalDigitRekursif(modified)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5