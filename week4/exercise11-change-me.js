function changeMe(arr) {
    // you can only write your code here!
    var format=["firstName","lastName","Gender","Age"];
    var result={};
    var date =new Date();
    var year=date.getFullYear();
    for(var i=0;i<arr.length;i++){
        var name=i+1+". "+arr[i][0]+" "+arr[i][1]
        result[name]={};
        for(var j=0;j<format.length;j++){
            if(format[j]==='Age'){
                
                if(arr[i][j]===undefined || arr[i][j]>year ){
                    var age="invalid Birth Year"
                    result[name][format[j]]=age;
                }
                else{
                    var age=year-arr[i][3];
                    result[name][format[j]]=age;
                }
                
            }
            else{
                result[name][format[j]]=arr[i][j]
            }
        }
    }
    console.log(result);
    
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