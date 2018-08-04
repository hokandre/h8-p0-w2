console.log('program Ruang Datar:')

function segitigaSamaSisiAtas(jumlah){
  for (var baris=jumlah;baris>0;baris--){
  var bintang='';
  for (var kolom=1; kolom<=jumlah;kolom++){
    if(kolom>=baris){
      bintang=bintang+' *';
    }
    else {
      bintang=bintang+' ';
    }
  }console.log(bintang);
}
}
function segitigaSamaSisiBawah(jumlah){
    for (var i = 0; i < jumlah; i++) {
      bintang='';
     for (var j = 0; j < jumlah; j++) {
       if(j>=i){
         bintang=bintang+'* ';
       }
       else {
         bintang=bintang+' ';
       }
     }console.log(bintang);
    }
}
function diamonds(jumlah){
  var median=Math.round(jumlah/2);

  for (i=median; i>0; i--){
    bintang=''
    for(j=1; j<=median;j++){
      if(j>=i){
        bintang=bintang+'* '
      }
      else{
        bintang= bintang+' '
      }
    }console.log(bintang)
  }
  for (i=1; i<=jumlah-median;i++){
    bintang=''
    for (j=jumlah-median; j>0;j--){
        if(j>=i){
          bintang=bintang+'* '
        }
        else {
          bintang=bintang+' ';
        }
    }console.log(bintang)
  }
}
diamonds(5);
/*(funtion(){
  main=true
  while (main===t
  for (var j = 0; i < jumlah;j--) {
    aSisiBawah(jumlah);
  main=false
  }
})();*/
