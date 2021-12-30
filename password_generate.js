function rand(x) {
  return x[Math.floor(Math.random() * x.length)];
}
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let options = [upperCase, lowerCase, number];
let randomOptions = rand(options);
let random = rand(randomOptions);
console.log(rand(upperCase), rand(lowerCase), rand(number));
console.log(random);

/*
random generate done
let hasil
for loop
jika hasil random sama dengan jenis yang sebelumnya maka random ulang
jika tidak maka hasil push / +=
return hasil
*/
let hasil = "";
console.log(hasil);
//need fix
let koreksi = () => {
  for (let index = 0; index < randomOptions.length; index++) {
    if (random == randomOptions[index]) {
      console.log(true);
      console.log(random, randomOptions, randomOptions[index]);
      break;
    } else {
      console.log(false);
    }
  }
};
