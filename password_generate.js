let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = '`!@#$%^&*()_+{}|:"<>?[];,./';
let options = [upperCase, lowerCase, number, symbol];
let hasil = "";

function rand(x) {
  return x[Math.floor(Math.random() * x.length)];
}

function generate() {
  let i = hasil.length - 1;
  let randomOptions = rand(options);
  let random = rand(randomOptions);
  random;
  let korek = 1;
  for (let index = 0; index < randomOptions.length; index++) {
    if (hasil[i] === randomOptions[index]) {
      korek -= 1;
    }
  }
  if (korek) {
    hasil += random;
  }
  return hasil;
}
let paramLength = 10;
for (let index = 0; hasil.length < paramLength; index++) {
  generate();
}
console.log(hasil);
