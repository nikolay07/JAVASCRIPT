const pickProps = (obj, arr) => {
        const newObject = {};
        for (let i in obj) {
            if (arr.includes(i)) { newObject[i] = obj[i]; }
        }
        return newObject;
    }
    /*
    Доставание свойств из объекта
     
    Создайте функцию, которая будет выбирать указанные свойства из объекта

    Основные требования:
    Функция с именем pickProps должна принимать 2 аргумента
    Объект как первый аргумент
    Массив строк во втором аргументе. Массив содержит названия свойств, которые нужно достать из исходного массива
    Функция должна вернуть объект, который содержит только те свойства, которые перечислены в массиве (['a', 17.1, 'John Doe'] => { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' })
    Пример работы: { a: 1, b: 2, c: 3 }, ['a', 'c'] => { a: 1, c: 3 }
    Если свойство указанно в массиве, но пропущено в объекте, то его в итоговый массив не добавлять
    Если ф-ция не смогла добавить ни одного свойства, то вернуть пустой объект
    Исходный объект должен остаться неизменным/
    Примитивный способ:
    for (let i in obj) {
            for (let a of arr) {
                if (i === a) object[i] = obj[i];
            }
        }
    */