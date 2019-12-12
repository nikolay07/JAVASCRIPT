function compareSums(a, b, c, d) {

    return sum(a, b) > sum(c, d) ? true : false;

}

function sum(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
}

/*
Сравнение сумм
 Напишите функцию, которая будет сравнивать сумму числе на промежутках [a,b], [c, d] включительно и возвращать true если первая сумма больше, и false в другом случае
Сигнатура метода - compareSums(a, b, c, d). Для нахождения суммы напишите отдельную ф-цию sum(from, to), которую будете потом исспользовать в ф-ции compareSums

*/