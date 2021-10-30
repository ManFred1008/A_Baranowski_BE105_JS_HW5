/* 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:
*******************************
* Домашняя работа: «Функции»  *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович        *
*******************************
Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль. */
task(12);



function formList () {
   let stud = prompt('12.1. Введите номер группы:', 'BE105');
   let strHW = 'Домашняя работа: «Функции»';
   let strStud = 'Выполнил: студент гр. ' + stud;
   let strLastName = prompt('12.2. Введите фамилию:', 'Барановский');
   let strFirstName = prompt('12.3. Введите имя', 'Андрей');
   let strFatherName = prompt('12.4. Введите отчество', 'Александрович');
   let strFIO = strLastName + ' ' + strFirstName + ' ' + strFatherName;
   let strStars = '';

   let maxLength = Math.max(strHW.length, strStud.length, strFIO.length);

   function formStr (str, maxL) {
      let str1 = str;
      for (let i = 0; i < (maxL - str.length); i++) {
         str1 += ' ';
      }
      
      str = '*' + ' ' + str1 + ' ' + '*';
      console.log(str);
   }

   for (let i = 0; i < maxLength + 4; i++) {
      strStars += '*';
   }

   console.log(strStars);
   formStr (strHW, maxLength);
   formStr (strStud, maxLength);
   formStr (strFIO, maxLength);
   console.log(strStars);
}

formList();