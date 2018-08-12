function hitung(nilai){
  var guguk = Math.round(nilai/2);
  var gabung = '';
  for (var i = 1; i <= guguk; i++){
    gabung += i;
  }
  for (var i = nilai-guguk; i >= 1; i--){
    gabung += i;
  }
  console.log(gabung);
}

hitung(6);
