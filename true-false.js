let satu = 1  //true
let nol = 0   //false
let stringKosong = '' //false
let stringIsi ='a'  //true
let objKosong = {}  //true
let objIsi = {id:1} //true
let arrKosong = []  //true
let arrIsi = [1,2]  //true
let Undefined = undefined //false
let kosong  //false
let math = Math //true

function trueFalse(){
  let array = [
    satu = 1,
    nol = 0,
    stringKosong = '',
    stringIsi ='a',
    objKosong = {},
    objIsi = {id:1},
    arrKosong = [],
    arrIsi = [1,2],
    Undefined = undefined,
    kosong,
    math = Math
  ]
  for (let index = 0; index < array.length; index++) {
    if(array[index]){
      console.log('variabel ke',index + 1 +' '+ true)
    }
    else{
      console.log('variabel ke',index + 1 +' '+ false)
    }
  }
}
trueFalse()