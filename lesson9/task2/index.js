function copyObj(object) {
    const copyObject = Object.assign({}, object)
    return copyObject;
}

/*
Копирование объекта

Проще вариант: 
const copyObj = (object) => Object.assign({}, object)
или const copyObj = {...objec}
*/