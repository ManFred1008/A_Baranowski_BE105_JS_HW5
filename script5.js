/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false. */
task(5);

function isEven(a) {
   if (a % 2 == 0) {
      return true;
   } else return false;
}

let result = isEven(-6);
console.log(result);