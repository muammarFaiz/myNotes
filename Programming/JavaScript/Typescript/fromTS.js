// using  ! as
// const myInput = document.getElementById('faiz')! as HTMLInputElement
// const myButton = document.getElementById('faizButton')
//
// function multiply2(numberx: string) {
//   let numbery = parseInt(numberx)
//   return numbery * 8
// }
// myButton.addEventListener('click', function() {
//   let tolog = multiply2(myInput.value)
//   console.log(tolog)
// })
// using array data type declaration
// let specialArr1: string[] = ['muammar', 'faiz', 'rafii']
// let specialArr2: [string, number, boolean, string[], [number, boolean]] =
//   ['faiz', 9, true, ['wulan', 'bulan', 'kayu', 'botle', 'knife'], [88, false]]
// specialArr1 = ['wulan', 'yulia', 'abimanyu', 'x', 'muammar', 'faiz' , 'rafii']
// console.log(specialArr1);
// pre-define an object
// interface exampleObj {
//   nestedObj: {
//     deepestObj: {
//       woof: string
//     },
//     hubla: boolean,
//     hehe: number
//   },
//   night: string
// }
//
// function printout (obj: exampleObj) {
//   return(obj.nestedObj.deepestObj.woof);
// }
//
// // object pablo have more variables than the exampleObj but it is not error because,
// // object pablo do have all the variable exampleObj have and nested in proper place,
// // in other words pablo is just the same as exampleObj but have more variables, so
// // it is not error for typescript.
// let pablo = {
//   nestedObj: {
//     deepestObj: {
//       woof: 'hello there'
//     },
//     cars: 88,
//     hubla: true,
//     hehe: 2,
//     rem: true
//   },
//   night: 'this is in the middle of the night'
// }
//
// console.log(printout(pablo));
// using jquery with typescript as simple as installing npm i @types/jquery
var thediv = $('faizdiv');
thediv.html('<h1>here we go</h1>');
// using express
// declare function require(name:string);
var express = require('express');
var app = express();
app.listen(3000, function () {
    console.log('localhost: 3000 xxxxx test');
});
