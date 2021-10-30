/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.параметр, непредусмотренный ф-цией по умолчанию - один любой символ,кроме пробела, то пирамида должна быть нарисована этим символом,например:
*
**
***
****
*****
******
*******
********
********* 
*/
task(7);

function pyramid(a) {
   let arrArg = [];
   if (arguments.length > 1 && arguments[1] != false) {
      for (let i = 0; i < a; i++) {
         arrArg.push(arguments[1]);   
         let arrStr = arrArg.join('');
         console.log(arrStr);
         arrArg = arrStr.split('');      
      }

   }  
   else {
      for (let i = 1; i <= a; i++){
         for (let j = 1; j <= i; j++) {
            arrArg.push(i);
         }
         let arrStr = arrArg.join('');
         console.log(arrStr); 
         arrArg = [];
      }
   }
}

pyramid(9);