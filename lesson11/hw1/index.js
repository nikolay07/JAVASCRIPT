let str = 'asdfgdfkjgdgldfg'
let num = 5;

function splitString(str, num = 10) {
    if (typeof str !== 'string') { return null }
    let arr = [];
    let start = 0;
    while (true) {
        let part = str.substr(start, num);
        if (part.length === 0) {
            break;
        } else if (part.length < num) {
            part = part + '.'.repeat(num - part.length);
        }
        arr.push(part);
        start += num;

    }

    return arr;

}
console.log(splitString(str, num));


/*
Разбить строку на подстроки
*/