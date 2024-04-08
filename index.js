// 1-misol

/*function array(num){
   return num.split("").reverse().map(Number);
}
let num = "12345"
console.log(array(num));*/

// 2-misol

/*function array(num) {
  let sum = 0; 
  let newArray = []; 

  for (let i = 1; i < num; i++) {
    newArray.push(i); 
  }
  console.log(newArray); 
}

array(9);*/

// 3-misol
/*let  a = [1,2,3,4,5,6]
let b = [6,7,8,9,10]
function res(a,b){
let sum = 0
a.forEach((b)=> {
  sum += b
})
let d = 0
b.forEach((b)=> {
  d += b

})
console.log(sum + d)
}res(a,b)*/

// 4-misol

/*function res(array) {
  var engKichik = Math.min(...array);
  var daraja4 = Math.pow(engKichik, 4).toString();
  return daraja4;
}
var array = [90, 30, 70,10, 500];
console.log(`Arrayning eng kichik sonning 4darajasi =  ${res(array)}`);*/

// 5-misol

// 1-yo'l
/*function teskariSoz(string) {
  let teskari = '';
  for (var i = string.length - 1; i >= 0; i--) {
      teskari += string[i];
  }
  return teskari;
}
var str = 'Salom';
console.log(teskariSoz(str)); */

// 2 - yo'l

/*function teskariSoz(string) {
  return string.split('').reverse().join('');
}
let str = 'Salom';
console.log(teskariSoz(str)); */