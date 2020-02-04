function getSpecialNumbers(m, n) {
    let specialNumbers = [];
    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            specialNumbers.push(i);
        }
    }
    return specialNumbers;
}
/*  
Найдите эллементы массива, которые деляться на 3 без остатка
*/