let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = '`!@#$%^&*()_+{}|:"<>?[];,./';

//--password generate--
function generate(x) {
  let hasil = "";
  //--fitur exclude--
  if(x.exclude){
    function excludeuppercase(x){
    for (let i = 0; i < x.exclude.length; i++) {
      for (let index = 0; index < uppercase.length; index++) {
        if(x.exclude[i] === uppercase[index]){
          uppercase = uppercase.replace(x.exclude[i],"")
        }
      }
    }
    return uppercase
    }
    function excludelowercase(x){
    for (let i = 0; i < x.exclude.length; i++) {
      for (let index = 0; index < lowercase.length; index++) {
        if(x.exclude[i] === lowercase[index]){
          lowercase = lowercase.replace(x.exclude[i],"")
        }
      }
    }
    return lowercase
    }
    function excludenumber(x){
    for (let i = 0; i < x.exclude.length; i++) {
      for (let index = 0; index < number.length; index++) {
        if(x.exclude[i] === number[index]){
          number = number.replace(x.exclude[i],"")
        }
      }
    }
    return number
    }
    function excludesymbol(x){
    for (let i = 0; i < x.exclude.length; i++) {
      for (let index = 0; index < symbol.length; index++) {
        if(x.exclude[i] === symbol[index]){
          symbol = symbol.replace(x.exclude[i],"")
        }
      }
    }
    return uppercase
    }
    function exclude(x){
    let text = `Success exclude ${x}`
    excludeuppercase(x)
    excludelowercase(x)
    excludenumber(x)
    excludesymbol(x)
    return text
    }
    exclude(x)
  }
  function password(x) {
    if (x.length >= 4) {
      //--fitur trueFalse--
      let options = [uppercase, lowercase, number, symbol];
      let upperCase = options.indexOf(uppercase);
      if (x.uppercase == false) {
        options.splice(upperCase, 1);
      }
      let lowerCase = options.indexOf(lowercase);
      if (x.lowercase == false) {
        options.splice(lowerCase, 1);
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
  password(x)
  return hasil
}

//--apakahada fitur--
function apakahPunyaUppercase(x) {
  for (let index = 0; index < uppercase.length; index++) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === uppercase[index]) {
        return true;
      }
    }
  }
  return false;
}
function apakahPunyaLowercase(x) {
  for (let index = 0; index < lowercase.length; index++) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === lowercase[index]) {
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

exports.generate = generate
exports.apakahPunyaUppercase = apakahPunyaUppercase
exports.apakahPunyaLowercase = apakahPunyaLowercase
exports.apakahPunyaNumber = apakahPunyaNumber
exports.apakahPunyaSymbol = apakahPunyaSymbol