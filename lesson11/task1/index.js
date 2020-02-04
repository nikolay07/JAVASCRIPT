function splitText(str, num = 10) {
    const manyStrings = [];
    let start = 0;
    if (typeof str !== 'string') return null;
    while (true) {
        let part = str.substr(start, num);
        if (part.length === 0) {
            break;
        }
        manyStrings.push(part[0].toUpperCase() + part.slice(1));
        start += num;
    }
    return manyStrings.join('\n');
}
console.log(splitText('abcdasdfds fgggghhhhffghh', 3));

/*Разбить текст на строки
 */