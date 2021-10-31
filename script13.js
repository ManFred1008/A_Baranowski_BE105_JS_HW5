/* 13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, не используя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. */
task(13);


let email = prompt('Введите email:', 'andreeW.bar90@mail.ru');
let mistakes = 0;

let checkEmail = function (email) {
   let e;
   let sumI = '';
   for (let i = 0; i < email.length; i++) {
      e = email[i].charCodeAt();
      // console.log(e);
      if ((e >= 65 && e <= 90) || (e >= 97 && e <= 122) || (e >= 48 && e <= 57) || e == 95 || e == 45 || e == 46 || e == 64) { 

      } else {
         alert('Адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки');
         mistakes++;
         break;
      }
      if ((i == 0 || i == email.length - 1) && (e == 95 || e == 45 || e == 46 || e == 64)) {
         alert('«собачка», знак подчеркивания, дефиса и точки не могут быть первыми и последними в адресе');
         mistakes++;
         break;
      }
      sumI = email[i] + email[i+1]
      if (sumI == '..' || sumI == '@.' || sumI == '.@' || sumI == '.-' || sumI == '-.' || sumI == '._' || sumI == '_.' || sumI == '@@' || sumI == '@-' || sumI == '-@' || sumI == '@_' || sumI == '_@' || sumI == '--' || sumI == '-_' || sumI == '_-' || sumI == '__') {
         alert('«собачка», знак подчеркивания, дефиса и точки не могут идти подряд');
         mistakes++;
         break;
      }
   }

   let sumToDog = '';
   if (email.indexOf('@') != email.lastIndexOf('@')) {
      alert('Не может быть более одной собачки!');
      mistakes++;
   } else   if (email.indexOf('@') == -1) {
               alert('Введите @:');
               mistakes++;
            } else if (email.indexOf('@') <= 2) {
               alert('имя до @ должно быть больше 2-х символов');
               mistakes++;
            } else {
               for (let i = 0; i < email.indexOf('@'); i++) {
                  if (i == 0 && isNaN(email[i]) == false) {
                     alert('Цифры не могут быть первыми в имени');
                     mistakes++;
                     sumToDog = 'false'
                     break;                     
                  }
                  sumToDog = sumToDog + email[i];
                  if ((e >= 65 && e <= 90) || (e >= 97 && e <= 122) || (e >= 48 && e <= 57) || e == 46) {
                     
                  } else {
                     alert('имя может содержать только буквы, цифры и точку');
                     mistakes++;
                     break;
                  }
               
               }
               if (isNaN(sumToDog) == false) {
                  alert('Цифры не могут быть единственными в имени');
                  mistakes++;
               }
            }
   if (email.indexOf('@') > email.lastIndexOf('.')) {
      alert('Нет домена верхнего уровня');
      mistakes++;
   } else if ((email.length - 1) - email.lastIndexOf('.') < 2 || (email.length - 1) - email.lastIndexOf('.') > 11) {
      alert('домен верхнего уровня не может быть длиной менее 2 и более 11 символов');
      mistakes++;
   } 
   
   if (mistakes == 0) {
      alert(`Ошибки ${mistakes} - email введён правильно!`);
      console.log(`Ошибки ${mistakes} - email введён правильно!`);
   } else {
      email = prompt(`Попробуйте ещё раз!`, 'andreeW.bar90@mail.ru');
      mistakes = 0;
      checkEmail(email);
   }
}

checkEmail(email);