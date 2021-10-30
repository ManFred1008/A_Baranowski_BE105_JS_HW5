/* 9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000 */
task(9);

let fib = function(a) {
   let arr = [];

   for (let n = 0;; n++) {
      if (n == 0) {
         arr.push(0);
      } else if (n == 1) {
         arr.push(1);
      } else {
         arr.push(arr[n-2] + arr[n-1]);
         if ((arr[n-1] + arr[n]) < a) {
            continue;
         } else break;
      }

   }
   console.log(arr);
}

fib(1000);