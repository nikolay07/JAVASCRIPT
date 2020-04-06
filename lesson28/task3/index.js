//Каррирование
const mult = a => b => a * b;
const twice = mult(2);
const triple = mult(3);
console.log(twice(5));
console.log(triple(5));
export { mult, twice, triple };