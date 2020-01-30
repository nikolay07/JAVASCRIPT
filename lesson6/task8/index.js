   function uniqueCount(array) {
       let uniqueArr = [...new Set(array)]
       return uniqueArr.length > 0 ? uniqueArr.length : null;
   }

   /*
   Нахождение уникальных
    Напишите функцию uniqueCount, которая будет находить количество уникальных чисел в массиве. 
    Если число повторяется больше одного раза, то его стоит учитывать, но только один раз. 
    Длина массива > 0
   Сигнатура - uniqueCount(array)

       let uniqueArr = [];   
      for (i of array){
           if (!newArr.includes(i)){ //
               newArr.push(i)
           }
       }
       или 
       let uniqueArr = [];    
       for (let i of array) {
       if (uniqueArr.indexOf(i) < 0) {
           uniqueArr.push(i)
       }
   }
      */