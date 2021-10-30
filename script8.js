/* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
    *
   ***
  *****
 *******
*********
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник. */
task(8);

function starPyramid() {
   let a = +prompt('8. Введите количество рядов пирамиды', 5);
   let arr = [];
   for (let i = 1; i <= a; i++) {
      for (let j = 1; j <= a - i; j++) {
         arr.push(' ');
      }
      for (let k = 1; k <= (i - 1) * 2 + 1; k++){
         arr.push('*');
      }
      arr = arr.join('');
      console.log(arr);
      arr = [];
   }
}

function starPyramidRev() {
   let a = +prompt('8. Введите количество рядов пирамиды', 5);
   let arr = [];
   for (let i = a; i >= 1; i--) {
      for (let j = a - i; j >= 1; j--) {
         arr.push(' ');
      }
      for (let k = (i - 1) * 2 + 1; k >= 1; k--){
         arr.push('*');
      }
      arr = arr.join('');
      console.log(arr);
      arr = [];
   }
}

starPyramid();
starPyramidRev();