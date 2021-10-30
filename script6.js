/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */
task(6);

function arrEven (array) {
   let arrEv = [];
   for(i = 0; i < array.length; i++) {
      if (isEven(array[i])) {
         arrEv.push(array[i]);
      }
   }
   return arrEv;
}

let array6 = [1, 5, -5, 9, 14, 354, 82, 3, 13, 0, 47];

let result6 = arrEven(array6);
console.log (result6);