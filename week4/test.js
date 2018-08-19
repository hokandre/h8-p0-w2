function transform(matriks){
    var newArr =[];
    for(var i=0;i<matriks[0].length;i++){
        newArr.push([]);
        for(var j=0;j<matriks.length;j++){
            newArr[i].push(matriks[j][i]);
        }
    }
    return newArr
}
console.log(transform([[1,2],[3,4],[5,6]]));