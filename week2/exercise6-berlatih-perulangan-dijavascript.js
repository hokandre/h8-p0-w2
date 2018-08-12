console.log('soal 1: Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA');
var angka=0;
while (angka < 20) {
  angka += 2;
  console.log(angka + ' - I love coding');
}

console.log('LOOPING KEDUA');
var angka =20;
while (angka > 0) {
    console.log(angka + ' - I love coding');
    angka -= 2;
}

console.log('');

console.log('soal 2: Melakukan Looping Menggunakan For');
console.log('LOOPING PERTAMA');
for (var angka = 2; angka <= 20; angka+=2){
  console.log(angka +' - I love coding');
}
console.log('LOOPING KEDUA');
for (var angka = 20; angka > 0; angka-=2) {
  console.log(angka +' - I love coding');
}

console.log('');

console.log('soal 3: Angka Ganjil dan Genap');
console.log('poin 1 dan 2');
var counter=0;
while (counter<=100){
  if(counter % 2==0){
    console.log("Genap");
  }
  else if (counter % 2==1) {
    console.log("Ganjil");
  }
  counter++;
}

console.log('');

console.log('poin: 3 dan 4');
for (var i = 1;i <=100; i += 2) {
  if (i % 3==0){
    console.log(i+"Kelipatan 3");
  }
  else {
    console.log("");
  }
}

for (var i = 1;i <=100; i += 5) {
  if (i % 6==0){
    console.log(i+"Kelipatan 6");
  }
  else {
    console.log("");
  }
}

for (var i = 1;i <=100; i += 9) {
  if (i % 10==0){
    console.log(i+"Kelipatan 10");
  }
  else {
    console.log("");
  }
}
