
function join(arr,char=','){
  var result='';
  for(var i=0; i<arr.length-1;i++){
    result=result+arr[i]+char;
  }
  result=result+arr[i]
  return result;
}

/*
2. function Split*/
function split(str,char=''){
  var result =[];
  var temp='';
  for(var i=0;i<str.length;i++){
    if(char===''){
      result.push(str[i])
    }
    else if (char !== str[i]) {
      temp=temp+str[i]
    }
    else {
      result.push(temp);
      temp='';
    }
  }
  result.push(temp);
  return result;
}



/* function slice ()*/
function slice(arr,awal=0,akhir=arr.length){
  var result=[];
  for (var awal;awal<akhir;awal++){
    result.push(arr[awal]);
  }
  return result;
}

/*function concat*/
function concat(arr1,arr2){
  var result=[];
  for(var i=0;i<arr1.length;i++){
    result.push(arr1[i])
  }
  for(var i=0;i<arr2.length;i++){
    result.push(arr2[i])
  }
  return result;
}

/* function splice */
function splice(arr,awal,jumlah,valueArr) {
  var kiri=slice(arr,0,awal);
  var kanan=slice(arr,awal);
  for(var i=0;i<jumlah;i++){
    kanan.shift();
  }
  for(var i=0;i<valueArr.length;i++){
    kiri.push(valueArr[i]);
  }
  for(var i=0; i<arr.length;i++){
    arr.pop();
  }
  arr=concat(kiri,kanan);
  return arr;
}


/* sorting*/
function sort(arr){
  for(var i=0; i<angkaArr.length;i++){
    for(var j=0;j<angkaArr.length-1;j++){
      if(angkaArr[j]>=angkaArr[j+1]){
        temp=angkaArr[j];
        angkaArr[j]=angkaArr[j+1]
        angkaArr[j+1]=temp
      }
    }
  }return arr;
}
