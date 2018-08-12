function angkaPalindrome(num) {
  // you can only write your code here!
  /*
  algoritma
  1. membuat looping yang akan berhenti jika number adalah palindrome
    -palindrome=false
    -cekPertama='belum'

    -----<Didalam looping step 1>-----
  2. menjadikan number sebagai array dan membaginya nilai nya menjadi 2 bagian
     dan masing-masing ditampung pada variabel yang berbeda:
    var awal='';
    var akhir='';
    -ubah inputan number menjadi arr[],dengan perintah split("");
    -mengisi var awal dan var akhir
      1. cari median dari panjang array
      2. lakukan looping sebanyak panjang array
      ---jika panjang genap---
      3. isi var awal dengan nilai array dibawah atau sama dengan index median
         dengan dari index paling awal yaitu nol
      4. isi var akhir dengan nilai array diatas dari index median
        dimulai index dari paling atas yaitu panjang dari array-1
        ---jika panjang ganjil---
      3. isi var awal dengan nilai array dibawah dengan index median
        dengan dari index paling awal yaitu nol
      4. isi var akhir dengan nilai array diatas dari index median
        dimulai index dari paling atas yaitu panjang dari array-1
  3. check hasil var awal dan var akhir, serta apakah pengecekan pertama sudah dilakukan
      ---kondisi memenuhi---
      -palindrome=true;
      -return num

      ---tidak memenuhhi---
      1.increment nilai num
      2. cekPertama='sudah'
      ----</ akhirlooping step 1 >-----------------
*/

  var cekPertama='belum'
  var palindrome=false;
  while(palindrome===false){
    //memasukan ke array;
    var arr=num.toString().split("");
    var awal='';
    var akhir='';
    var median=Math.round(arr.length/2);

    //cek panjang data
    //data genap
    if(arr.length % 2 ===0){
      for(var i=0; i<median;i++){
        awal=awal+arr[i];
      }
      for(var i=arr.length;i>median;i--){
        akhir=akhir+arr[i-1];
      }

    }

    else{
      for(var i=0; i<median-1;i++){
        awal=awal+arr[i];
      }
      for(var i=arr.length;i>median;i--){
        akhir=akhir+arr[i-1];
      }
    }

    //cek hasil
    if(awal===akhir && cekPertama==='sudah'){
        palindrome=true;
        return num
      }
    else {
        cekPertama='sudah'
        num=num+1;
      }
  }
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); //121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
