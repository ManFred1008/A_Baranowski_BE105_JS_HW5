/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив. */
task(4);

let arr = function() {

   let min = +prompt('4.1 Введите число начала массива', 1);
   let max = +prompt('4.2 Введите число конца массива', 10);
   let array = [];
   if (min < max) {
      for (let i = 0; i <= max - min; i++) {
         array.push(min++);
         max++;
      }
   } else {
      for (let i = min - max; i >= 0; i--) {
         array.push(min--);
      }
   }
   return array;
}

function printArr() {
   console.log(arr());
}

printArr();
