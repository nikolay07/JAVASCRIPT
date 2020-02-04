function removeDuplicates(array) {
    let newArray = [...new Set(array)]
    return newArray.length > 0 ? newArray : null;
}

/*
Удаление дубликатов

Примитивный метод:
let newArray = [];
for (let i of array) {
if (!newArray.includes(i)) {
        newArray.push(i);
    }
}
или  
let newArray = [];
for (let i of array) {
    if (newArray.indexOf(i) < 0) {
            newArray.push(i);
    }
}
*/