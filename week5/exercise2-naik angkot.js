function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result=[];
    for(var i=0;i<arrPenumpang.length;i++){
        var nama, start, tujuan ='';
        var bayar=0;
        //1. isi data
        for(var j=0;j<arrPenumpang[i].length;j++){
            if(j===0){
                nama=arrPenumpang[i][j]
            }
            else if(j===1){
                start=arrPenumpang[i][j]
            }
            else{
                tujuan=arrPenumpang[i][j];
            }
        }
        var count=0;
        var mulai=false;
        //2. hitung ongkos
        for(var k=0;k<rute.length;k++){
            if(start===rute[k]){
                count++
                mulai=true;
            }
            else if(tujuan===rute[k]){
                mulai=false
                break;
            }
            else{
                if(mulai===true){
                    count++
                }
            }
        }
        console.log(count);
        bayar=count*2000;

        //3. masukan object
        var obj={
            penumpang : nama,
            naikDari: start,
            tujuan: tujuan,
            bayar: bayar
        }
        result.push(obj);

    }


    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]