/* Diamond
var jumlah=6;
var median=Math.round(jumlah/2);
for(var baris=median-1; baris>=0; baris--){
  var bintang='';
  for(var kolom=0; kolom <median; kolom++){
    if(kolom<baris){
    bintang=bintang+' ';
    }
    else{
      bintang=bintang+'* ';
    }
  }console.log(bintang);
}
var sisa=jumlah-median
if(sisa===median){
  for(var x=0;x<sisa;x++){
    var bintang='';
    for(var y=0;y<sisa;y++){
      if(y >= x){
        bintang=bintang+'* ';
      }
      else {
        bintang=bintang+'-';
      }
    }console.log(bintang);
  }
}
else{
  for(var x=0;x<sisa;x++){
    var bintang=' ';
    for(var y=0;y<sisa;y++){
      if(y >= x){
        bintang=bintang+'* ';
      }
      else {
        bintang=bintang+'-';
      }
    }console.log(bintang);
  }
}
*/
var jumlah=6;
var median=Math.round(jumlah/2);
for(var baris=0; baris<median; baris++){
  var bintang='';
  for(var kolom=0; kolom<jumlah; kolom++){
    bintang=bintang+'*';
  }console.log(bintang);
}
for(var baris=0;baris<(jumlah-median);baris++){
  if(baris === (jumlah-median)-1){
    console.log(bintang);
  }
  else{
    var bintang_bawah='';
    for(var i=0; i<=bintang.length-1;i++){
      if(i===0 || i===bintang.length-1){
        bintang_bawah=bintang_bawah+'*'
      }
      else{
        bintang_bawah=bintang_bawah+' '
      }
    }console.log(bintang_bawah);
    }
  }
