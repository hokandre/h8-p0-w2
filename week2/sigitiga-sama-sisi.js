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
  var jumlah=5;
  for (var baris=0; baris<jumlah; baris++){
    if(baris===0 || baris===jumlah-1){
      bintang='';
      for(var kolom=0; kolom<jumlah;kolom++){
        bintang=bintang+'*'
      }
      console.log(bintang);
    }
    else {
      var length=bintang.length;
      bintang_bawah='';
      for(var i=0;i<=length-1;i++){
        if(i===0 || i===length-1){
          bintang_bawah=bintang_bawah+'*'
        }
        else{
          bintang_bawah=bintang_bawah+' '
        }
      }console.log(bintang_bawah);
    }
  }
  */
  /*
  var baris=3;
  var kolom=3*baris;
  for(var x=0; x<baris;x++){
    for(var y=0; y<kolom; y++){
      for(var kiri=0;var kiri<baris; kiri++){
        for(var line=baris-1; line>=0; line++){
          for(){


          }
        }
      }
      for(){

      }
      for(){

      }

    }
  }*/

/* X */
/*
var jumlah=5;

for (var baris=0; baris<jumlah; baris++){
    bintang='';
    for(var kolom=jumlah-1;kolom>=0;kolom--){
      if(kolom===baris){
        bintang=bintang+'*'
      }
      else{
        bintang=bintang+' '
      }
    }
    for(var kiri=0; kiri<jumlah;kiri++){
      if(kiri===baris){
        bintang=bintang.substring(0,kiri)+'*'+bintang.substring(kiri+1)
      }
    }
    console.log(bintang);
}
*/
/*
Trapesium
var jumlah=6;
for(var baris=0;baris<jumlah;baris++){
  hasil='';
  for(var kiri=jumlah-1;kiri>=0;kiri--){
    if(kiri<=baris){
      hasil=hasil+'*'
    }
    else {
      hasil=hasil+' '
    }
  }
  for(var tengah=0; tengah<jumlah;tengah++){
    hasil=hasil+'*'
  }
  for(var kanan=0; kanan<jumlah;kanan++){
    if(kanan<=baris){
      hasil=hasil+'*'
    }
    else{
      hasil=hasil+' '
    }
  }console.log(hasil);
}
*/
