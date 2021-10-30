/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию. */
task(10);


let numSum = function(a) {
   console.log(a);
   let arr = String(a).split('');
   // console.log(arr);
   let sum = 0;
   for (i = 0; i < arr.length; i++){
      sum += +arr[i];
   }
   console.log(sum);
   if (sum > 9) {
      numSum(sum);
   } else {
      arr = arr.join('');
      console.log(arr, sum);
   }
}

let num10 = prompt('10. Введите число:')
numSum(num10);