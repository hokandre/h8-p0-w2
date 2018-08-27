function hitungHuruf(kata) {
  // you can only write your code here!
  /* algoritma
  1. pisahkan menjadi masing-masing katif(a/split)
  2. hitung jumlah pasangan sama pada masing-masing kata
  3. temukan index terbesar
  4. return katabaru dengan parameter index
  */
  var kataBaru =[];

  //1. split
  var temp=''
  for (var i = 0; i < kata.length; i++) {
    if(kata[i]===' '){
      kataBaru.push(temp);
      temp=''
    }
    else{
      temp=temp+kata[i]
    }
  }
  kataBaru.push(temp);
  
  //2.hitungjumlahperulangan
  var objectKata={};
  for(var i=0;i<kataBaru.length;i++){
    var name=kataBaru[i]
    if(objectKata[name]===undefined){
      objectKata[name] ={

      }
     }
    for(var j=0;j<name.length;j++){
      var ketemu=false
      for(var k=0;k<name.length;k++){
        if(kataBaru[i][j]===kataBaru[i][k] && j !== k ){
          ketemu=true
        }
      }
      if(ketemu===true){
        if(objectKata[name][kataBaru[i][j]]===undefined){
          objectKata[name][kataBaru[i][j]]=1
        }
      }
    }
    
  }
  //cari maximum
  var keys=Object.keys(objectKata);
  var kata=keys[0]
  var max=Object.keys(objectKata[keys[0]]).length;
  for(var i=1;i<keys.length;i++){
    var leng=Object.keys(objectKata[keys[i]]).length;
    if(leng>max){
      max=leng
      kata=keys[i]
    }
    
  }
  
  return kata;

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
