function groupAnimals(animals) {
  // you can only write your code here!
  var count=1;
  var huruf=[];
  for(var i=0; i<animals.length-1;i++){
	huruf.push(animals[i][0])
  }
  huruf.sort();
  for(var i=0; i<=huruf.length-2;i++){
    if(huruf[i]===huruf[i+1]){
      count=count;
    }
    else{
      count += 1;
    }
  }
  var groupArr=[];
   for(var i=0; i<count; i++){
    groupArr.push([]);
  }

  for(var i=0;i<animals.length;i++){
    for(var j=0;j<groupArr.length;j++){
        if(groupArr[j].length===0){
          groupArr[j].push(animals[i])
          break;
        }
        else{
          /*var isi=groupArr[j][0];
          var isiAnimal=animals[i]*/
          if(animals[i][0]===groupArr[j][0][0]){
            groupArr[j].push(animals[i]);
            break;
          }
        }
    }
  }
  groupArr.sort();
  return groupArr
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
