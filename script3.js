/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b. */
task(3);

function min (a, b) {
   if (a > b) {
      return b;
   } else return a;
}

console.log('min: ' + min(5, 2));

function max (a, b) {
   if (a > b) return a;
   else return b;
}

console.log('max: ' + max(212, 2));