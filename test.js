let passwordGenerate = require('./password_generate')

const p1 = {length: 1}
const p2 = {length: 3}
const p3 = {length: 4}
const p4 = {length: 123}
const p5 = {length: 8, upperCase: false}
const p6 = {length: 9, lowerCase: false, number: false}
const p7 = {length: 10, uppercase: false, lowerCase: false, symbol: false }

const t1 = passwordGenerate.generate(p1) 
const t2 = passwordGenerate.generate(p2) 
const t3 = passwordGenerate.generate(p3) 
const t4 = passwordGenerate.generate(p4) 
const t5 = passwordGenerate.generate(p5)
const t6 = passwordGenerate.generate(p6)  
const t7 = passwordGenerate.generate(p7) 

console.log(`Password Generate t1:${t1}`)
console.log(`Password Generate t2:${t2}`)
console.log(`Password Generate t3:${t3}`, `length:${t3.length}`)
console.log(`Password Generate t4:${t4}`, `length:${t4.length}`)
console.log(`Password Generate t5:${t5}`, `Length:${t5.length}`,
  `Apakah punya Upper Case:${passwordGenerate.apakahPunyaUpperCase(t5)}`)
console.log(`Password Generate t6:${t6}`, `Length:${t6.length}`,
  `Apakah Punya Lower Case:${passwordGenerate.apakahPunyaLowerCase(t6)}`,
  `Apakah Punya Number:${passwordGenerate.apakahPunyaNumber(t6)}`)
console.log(`Password Generate t7:${t6}`, `Length:${t7.length}`,
  `Apakah Punya Upper Case:${passwordGenerate.apakahPunyaUpperCase(t7)}`,
  `Apakah Punya Lower Case:${passwordGenerate.apakahPunyaLowerCase(t7)}`,
  `Apakah Punya Symbol:${passwordGenerate.apakahPunyaSymbol(t7)}`)