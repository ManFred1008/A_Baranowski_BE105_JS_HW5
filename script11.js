/* 11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл. */
task(11);

let showArr = function (arr) {
   console.log(arr[i]);
   i++;
   if (i < arr.length) {
      showArr(arr);
   }
}

let i = 0;
let arr11 = [1, 2, 8, -7, 0, 78.9, 45];
console.log(arr11);
showArr(arr11);