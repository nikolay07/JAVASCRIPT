/* оператор || (OR) */
console.log("false || true: ", false || true);
console.log("false || true || false: ", false || true || false);
console.log("false || false || false: ", false || false || false);

/* оператор && (AND) */

console.log("false && true: ", false && true);
console.log("false && true && false: ", false && true && false);
console.log("true && true && true: ", true && true && true);


/* Логические операторы могут применятся к любым типам данных */


/* || находит первое истинное значение */
console.log("'text' || false: ", 'text' || false);
console.log("true || 'text': ", true || 'text');
console.log("undefined || null || 0 || '' || null: ", undefined || null || 0 || '' || null);


const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значкние переменной amount в формате console.log('amount: ', amount);
console.log('amount: ', amount);


/* && находит первое ложное значение */
console.log("'text' && false: ", 'text' && false);
console.log("true && 'text': ", true && 'text');
console.log("undefined && null && 0 && '' && null: ", undefined && null && 0 && '' && null);


/* оператор отрицания (OR) */
console.log("!true: ", !true);
console.log("!false: ", !false);
console.log("!'text': ", !'text');
console.log("!!'text': ", !!'text');