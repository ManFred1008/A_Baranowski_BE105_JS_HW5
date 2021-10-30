/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */
task(2);

let secDeg,
    thirdDeg;

function degree (num) {
   return console.log(`Число: ${num}, квадрат: ${num**2}, куб: ${num**3}`);
}

degree(14);