   function uniqueCount(array) {
       let uniqueArr = [...new Set(array)]
       return uniqueArr.length > 0 ? uniqueArr.length : null;
   }

   /*
   Нахождение уникальных

Примитивный метод:
let uniqueArr = [];   
    for (i of array){
        if (!uniqueArr.includes(i)){ 
            uniqueArr.push(i)
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