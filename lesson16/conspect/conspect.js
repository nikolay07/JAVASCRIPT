//Функции: всплытие

//Объявление переменных 
var a = 17;
if (a) {
    var a = 1; // происходит всплатие var 'а' вверх;
    console.log(a);
}
console.log(a) // 1 (из-за всплытия var)
    // P.s.: всплытие не произойдет если var 'a' объявлена в нетри фунцкции;
var greeting = 'Hello';

function sayHi() {

}


//Массив функция