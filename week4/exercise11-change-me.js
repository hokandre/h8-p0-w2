function changeMe(arr) {
    // you can only write your code here!
    var format=["firstName","lastName","Gender","Age"];
    var result={};
    var date =new Date();
    var year=date.getFullYear();
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<format.length;j++){
            if(format[j]==='Age'){
                
                if(arr[i][j]===undefined || arr[i][j]>year ){
                    var age="invalid Birth Year"
                    result[format[j]]=age;
                }
                else{
                    var age=year-arr[i][3];
                    result[format[j]]=age;
                }
                
            }
            else{
                result[format[j]]=arr[i][j]
            }
        }
        console.log(i+1, result["firstName"]+" "+result["lastName"] )
        console.log(result);
    }
    
  }
  
  // TEST CASES
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
 // changeMe([]); // ""