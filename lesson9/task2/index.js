function copyObj(object) {
    const copyObject = Object.assign({}, object)
    return copyObject;
}

/*
Копирование объекта
Создайте функцию, которая будет копировать объект
Основные требования:
1. Функция с именем copyObj должна принимать объект и возвращать его копию (первого
уровня)
2. Исходный объект должен остаться неизменным

Проще вариант: 
const copyObj = (object) => Object.assign({}, object)
или const copyObj = {...objec}
*/