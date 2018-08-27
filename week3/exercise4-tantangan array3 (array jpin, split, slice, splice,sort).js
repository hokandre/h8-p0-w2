function dataHandling2(input){
  /* menjadikan array input sesuai dengan data yang diinginkan */
  input.splice(1, 2, "Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
  input.splice(4,1, "Pria", "SMA Internasional Metro");
  console.log(input);
  console.log();


  /* memisahkan dan menyimpan data tanggal pada array input ke dalam array split
  dengan menggunakan fungsi split()*/
  var split=input[3].split("/");
  //menampilakan nama bulans
  switch (split[1]) {
    case "01":{
        console.log(" januari ");
        break;
    }
    case "02":{
        console.log(" februari ");
        break;
    }
    case "03":{
        console.log(" Maret ");
        break;
    }
    case "04":{
        console.log(" April ");
        break;
    }
    case "05":{
        console.log(" Mei ");
        break;
    }
    case "06":{
        console.log(" juni ");
        break;
    }
    case "07":{
        console.log(" juli ");
        break;
    }
    case "08":{
        console.log(" Agustus ");
        break;
    }
    case "09":{
        console.log(" September ");
        break;
    }
    case "10":{
        console.log(" Oktober ");
        break;
    }
    case "11":{
        console.log(" November ");
        break;
    }
    case "12":{
        console.log(" Desember ");
        break;
    }
    default:
      console.log("Salah Tanggal");
  }
  console.log();

  /* melaukan sorting Descending array split
  1. merubah tipe data isi array split menjadi number;
  2. melakukan fungsi sorting;
  */
  //ubah data
  /*for(var i=0; i<split.length;i++){
    split[i]=Number(split[i]);
  }*/
  //sorting by descending
  split.sort(function(value1,value2){return parseInt(value1)<parseInt(value2)})
  console.log(split);

  /* Join Elemenet pada array split dan ditampung pada variabel date*/

  var date=split;
  temp=date[0]
  date[0]=date[1]
  date[1]=date[2]
  date[2]=temp
  console.log(date.join("-"))
  /* membatasi input */
    input[1]=input[1].slice(0,15);
    console.log(input[1]);
}





/*
------------------------------------------------
                  program
------------------------------------------------
*/
var input=["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
