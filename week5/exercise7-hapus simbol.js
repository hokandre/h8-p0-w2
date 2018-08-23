function hapusSimbol(str) {
    // you can only write your code here!
    var result='';
    var alfabet='abcdefghijklmnopqrstuvwxyz'
    var angka='0123456789'
    for(var i=0;i<str.length;i++){
        var character=str[i]
        var isThere=false;
        //1. cek dengan angka
        for(var j=0;j<angka.length;j++){
            if(character===angka[j]){
                isThere=true;
                break;
            }
        }
        //push jika true
        if(isThere===true){
            result=result+str[i]
        }
        //cek dengan alfabet
        else{
            var isThere=false;
            for(var k=0;k<alfabet.length;k++){
                if(character===alfabet[k]){
                    isThere=true;
                    break;
                }
            }
            if(isThere===true){
                result=result+str[i]
            }
        }
        
    }
    return result;
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100