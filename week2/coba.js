function boxNumber(jumlah){
  var median=Math.round(jumlah/2);
  if(jumlah % 2===0){
  for (var i = 1; i <= jumlah; i++) {
    var hasil='';
    var kurang=1;
    for (var j = 1; j<=jumlah;j++) {
      if(j<median){
        hasil=hasil+j;
      }
      else if (j===median) {
        hasil=hasil+j;
      }
      else {
        hasil=hasil+(j-kurang);
        kurang=kurang+2;
      }
    }
    console.log(hasil);
  }
}else {
  for (var i = 1; i <= jumlah; i++) {
    var hasil='';
    var kurang=2;
    for (var j = 1; j<=jumlah;j++) {
      if(j<=median){
        hasil=hasil+j;
      }
      else {
        hasil=hasil+(j-kurang);
        kurang=kurang+2;
      }
    }
    console.log(hasil);
  }
}
}
boxNumber(5);
