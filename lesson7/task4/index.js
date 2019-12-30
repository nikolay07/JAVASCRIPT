const getMessagesForBestStudents = (allStudentsNames, failedStudentsNames) =>
    allStudentsNames
    .filter(name => !failedStudentsNames.includes(name))
    .map(name => 'Good job, ' + name);
const allStudentsNames = ['a', 'b', 'c', 'd'];
const failedStudentsNames = ['c', 'd'];

/*
Деструктуризация массива и спред прератор

Создайте функцию getMessagesForBestStudents, которая будет генерировать сообщения для студентов, которые сдали экзамен

Основные требования:
Функция должна называться getMessagesForBestStudents
Функция должна принимать первым аргументом массив имен всей группы, вторым аргументом массив имен студентов, которые не сдали экзамен (оба массива содержат строки - имена в качестве элементов. Второй массив содержит часть имен из первого массива)
Функция должна выбрать имена, которые есть в первом массиве, но нет во втором и вернуть новый массив, элементы которого - строки, которые содержат сообщение вида 'Good job, Ann'. Где Ann - это имя, которое есть в первом массиве, но нет во втором
Исходные массивы не должны меняться
Условный пример работы ф-ции: ['a', 'b', 'c', 'd'], ['b', 'd'] -> ['Good job, a', 'Good job, c']
*/