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
  var jumlah=[];
  for(var i=0; i<kataBaru.length;i++){
    var count=0;
    var ketemu=false;
    for(var j=0;j<kataBaru[i].length;j++){
      var lewati =[];
      for(var check=0; check<lewati.length;check++){
        if(j===lewati[check]){
          j=j+1
          break;
        }
      }
      for(var k=0;k<kataBaru[i].length;k++){
        if(kataBaru[i][j]===kataBaru[i][k] && j !== k){
          ketemu=true;
          lewati.push(k);
        }
      }
    }
    if(ketemu===true){
      count++
    }
    jumlah.push(count);
  }
  console.log(jumlah);

  //3. mecari indeks maks
  var maks=jumlah[0]
  var index=0;
  for(var i=1;i<jumlah.length;i++){
    if(jumlah[i]>maks){
      maks=jumlah[i]
      index=i
    }
  }
  return kataBaru[index];

}

// TEST CASES
//console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
//console.log(hitungHuruf('aku adalah anak gembala')); // adalah
//console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
//console.log(hitungHuruf('mengayuh perahu di danau')); // danau
