function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaString=angka.toString();
    if(angkaString.length===1){
        return parseInt(angkaString)
    }else{
        var result=1;
        for(var i=0;i<angkaString.length;i++){
            result=result*parseInt(angkaString[i]);
        }
        return kaliTerusRekursif(result)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6