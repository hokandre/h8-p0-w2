function balikString(kalimat){
  var awalArr =[];
  var length=kalimat.length-1;
  for(var i=0; i<kalimat.length;i++){
    awalArr[i]=kalimat[length];
    length -= 1;
  }
  var hasil='';
  for (var i = 0; i < awalArr.length; i++) {
    hasil=hasil+awalArr[i];
  }
  return hasil;
}
console.log(balikString("hello word!"));
