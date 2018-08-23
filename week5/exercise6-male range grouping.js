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
function meleeRangedGrouping (str) {
    //your code here
    var result=[];
    var hasilSplit=split(str,",")
    
    var tipe=[];
    if(hasilSplit.length===0){
        return [];
    }
    else{
        for(var i=0;i<hasilSplit.length;i++){
            //1. cari index dari "-" dalam setiap elemen hasil split
            var index;
            for(var j=0;j<hasilSplit[i].length;j++){
                var char=hasilSplit[i][j]
                if(char==="-"){
                    index=j
                    break;
                }
            }
            //2. mendapatkan nilai tipe hero
            var tipeHero=hasilSplit[i].substring(index);
    
            //3. memasukan tipe hero pada array tipe
            if(tipe.length===0){
                tipe.push(tipeHero);
                result.push([]);
            }
            else{
                //cek tipe apakah sudah ada 
                var isThere=false
                for(var k=0;k<tipe.length;k++){
                    if(tipe[k]===tipeHero){
                        isThere=true;
                        break;
                    }
                }
                if(isThere===false){
                    result.push([]);
                    tipe.push(tipeHero);
                }
            }
            //4. membandingkan tipe hero pada inputan dengan tipe hero pada array tipe
            for(var k=0;k<tipe.length;k++){
                if(tipeHero===tipe[k]){
                    var nama=hasilSplit[i].substring(0,index);
                    result[k].push(nama)
                }
            }
        }
    }

    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
 console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []   