let arr = [{ name: 'Mat', phoneNumber: '777-77-77' }, { name: 'Ann', phoneNumber: '777-77-77' }, { name: 'Bob', phoneNumber: '777-77-77' }]

function sortContacts(arr, bool = true) {
    if (!Array.isArray(arr)) return null;
    return bool ? arr.sort((a, b) => a.name.localeCompare(b.name)) : arr.sort((a, b) => b.name.localeCompare(a.name));
}
console.log(sortContacts(arr, false));
/*
Сортировка строк
Напишите ф-цию, которая будет сортировать список контактов в заданном направлении
Основные требования:
1. Функция должна называться sortContacts
2. Функция должна принимать как первый аргумент массив контактов
3. Контакт - это объект вида { name: 'Tom', phoneNumber: '777-77-77' }
4. Второй аргумент - булевое значение направления сортировки (true - по возрастанию, false - по
убыванию)
5. Функция должна вернуть отсортированный по имени абонента массив в нужном направлении
(по убыванию или возрастанию)
6. По умолчанию сортировка должна происходить по возрастанию
7. Если передан не массив, то вернуть null
*/