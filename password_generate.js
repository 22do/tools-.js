let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = '`!@#$%^&*()_+{}|:"<>?[];,./';

//--password generate--
function generate(x) {
  let hasil = "";
  function password(x) {
    if (x.length >= 4) {
      //--fitur trueFalse--
      let options = [upperCase, lowerCase, number, symbol];
      let uppercase = options.indexOf(upperCase);
      if (x.upperCase == false) {
        options.splice(uppercase, 1);
      }
      let lowercase = options.indexOf(lowerCase);
      if (x.lowerCase == false) {
        options.splice(lowercase, 1);
      }
      let Number = options.indexOf(number);
      if (x.number == false) {
        options.splice(Number, 1);
      }
      Symbol = options.indexOf(symbol);
      if (x.symbol == false) {
        options.splice(Symbol, 1);
      }

      function rand(x) {
        return x[Math.floor(Math.random() * x.length)];
      }

      let i = hasil.length - 1;
      let randomOptions = rand(options);
      let random = rand(randomOptions);
      let korek = 1;
      for (let index = 0; index < randomOptions.length; index++) {
        if (hasil[i] === randomOptions[index]) {
          korek -= 1;
        }
      }
      if (korek) {
        hasil += random;
      }
      for (let index = 0; hasil.length < x.length; index++) {
        password(x);
      }
      return hasil;
    }
  }
}
password()

//--apakahada fitur--
function apakahPunyaUpperCase(x) {
  for (let index = 0; index < upperCase.length; index++) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === upperCase[index]) {
        return true;
      }
    }
  }
  return false;
}
function apakahPunyaLowerCase(x) {
  for (let index = 0; index < lowerCase.length; index++) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === lowerCase[index]) {
        return true;
      }
    }
  }
  return false;
}
function apakahPunyaNumber(x) {
  for (let index = 0; index < number.length; index++) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === number[index]) {
        return true;
      }
    }
  }
  return false;
}
function apakahPunyaSymbol(x) {
  for (let index = 0; index < symbol.length; index++) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === symbol[index]) {
        return true;
      }
    }
  }
  return false;
}

let arr1 = { length: 15, upperCase: false, number: false };
let arr2 = { length: 4 };
console.log(generate(arr1));
console.log(generate(arr2));

//export {generate,apakahPunyaUpperCase,apakahPunyaLowerCase,apakahPunyaNumber,apakahPunyaSymbol}
