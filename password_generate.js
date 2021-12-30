function rand(x) {
  return x[Math.floor(Math.random() * x.length)];
}
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let options = [upperCase, lowerCase, number];
let randomOptions = rand(options);
let random = rand(randomOptions);
// console.log(rand(upperCase), rand(lowerCase), rand(number));
// console.log(randomOptions);
// console.log(random)

/*
random generate done
let hasil
for loop
jika hasil random tidak sama dengan jenis yang sebelumnya maka +=
jika sama maka random ulang
return hasil
*/
let hasil = "b";
//console.log(hasil);
let i = hasil.length -1
//need fix
let koreksi = () => {
  let korek = 1
  for (let index = 0; index < randomOptions.length; index++) {
    if ( hasil[i] === randomOptions[index]) {
      // console.log(true);
      // console.log(random, randomOptions, randomOptions[index])
      korek -= 1
      //console.log('benar')
    }
  }
  if(korek){
    hasil += random
  }
  return hasil
};

// if(hasil == lowerCase){
//   console.log(true)
// }
// else{
//   console.log(false)
// }

for (let index = 0; index < 5; index++) {
  koreksi()
}
console.log(hasil)