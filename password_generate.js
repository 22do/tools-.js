function rand(x){
  return x[Math.floor(Math.random() * x.length)]
}
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZ'
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let number = '1234567890'
let options = [upperCase,lowerCase,number]
let randomOptions = rand(options)
console.log(rand(upperCase),rand(lowerCase),rand(number))
console.log(rand(randomOptions))

/*
random generate done
for loop
let hasil
jika hasil random sama dengan jenis yang sebelumnya maka random ulang
jika tidak maka hasil push / +=
return hasil
*/