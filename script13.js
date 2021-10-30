/* 13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, не используя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. */
task(13);

let checkEmail = function(email) {
   let codeEmail;
   if (email.indexOf('@') != email.lastIndexOf('@')) {
      alert('Не может быть более одной собачки!');
   } else   if (email.indexOf('@') == -1) {
               alert('Введите @:');
            } else if (email.indexOf('@') <= 2) {
               alert('имя до @ должно быть больше 2-х символов');
            }
   let n = '';
   console.log(email.indexOf('@'));
   for (let i = 0; i < email.indexOf('@'); i++){
      
      codeEmail = email[i].charCodeAt();
      console.log(codeEmail, email[i]);
      // if ((codeEmail >= 65 && codeEmail <= 90) || (codeEmail >= 97 && codeEmail <= 122) || (codeEmail >= 48 && codeEmail <= 57) || codeEmail == 46) {
      //    if (i = 0 && (codeEmail >= 48 && codeEmail <= 57)) {
      //       alert('Имя не может начинаться с цифры');
      //    } 
      n += email[i];
      // } else {
      //    alert('Имя может содержать только буквы, цифры и точку');
      // }
      console.log(n);
   }
      if (isNaN(n)) {
         alert('Верно!');
      }else {
         alert('Имя не может содержать только цифры');
      }
   

   for (i = 0; i < email.length; i++) {
      codeEmail = email[i].charCodeAt();
      if ((codeEmail >= 65 && codeEmail <= 90) || (codeEmail >= 97 && codeEmail <= 122) || (codeEmail >= 48 && codeEmail <= 57) || codeEmail == 95 || codeEmail == 45 || codeEmail == 46 || codeEmail == 64) {
         if ((i == 0 && (codeEmail == 95 || codeEmail == 45 || codeEmail == 46 || codeEmail == 64)) || (i == (email.length - 1) && (codeEmail == 95 || codeEmail == 45 || codeEmail == 46 || codeEmail == 64))) {
            alert('«собачка», знак подчеркивания, дефис и точка, не могут быть первыми и последними в адресе');
            break;
         }
         if (email[i] + email[i+1] == '..' || email[i] + email[i+1] == '@.' || email[i] + email[i+1] == '.@' || email[i] + email[i+1] == '.-' || email[i] + email[i+1] == '-.' || email[i] + email[i+1] == '._' || email[i] + email[i+1] == '_.' || email[i] + email[i+1] == '@-' || email[i] + email[i+1] == '-@' || email[i] + email[i+1] == '@_' || email[i] + email[i+1] == '_@' || email[i] + email[i+1] == '--' || email[i] + email[i+1] == '-_' || email[i] + email[i+1] == '_-' || email[i] + email[i+1] == '__') {
            alert('Вы неправильно ввели email33333333!');
            break;
         }
      }else {
         alert('Вы неправильно ввели email!');
         break;
      }
   }


}

// charCodeAt()

let email = prompt('Введите email:');

checkEmail(email);