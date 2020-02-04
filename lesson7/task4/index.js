const getMessagesForBestStudents = (allStudentsNames, failedStudentsNames) =>
    allStudentsNames.filter(name => !failedStudentsNames.includes(name))
const happyStudenrs = allStudentsNames.map(name => 'Good job, ' + name);
const allStudentsNames = ['ann', 'bob', 'chak', 'devid'];
const failedStudentsNames = ['cherry', 'denis'];

/*
Деструктуризация массива и спред орератор
Более расписаный вариант:
function getMessagesForBestStudents (allStudentsNames, failedStudentsNames){
    const passedStudents = allStudentsNames.filter(name => !failedStudentsNames.includes(name))
    const messages = passedStudents.map(name => 'Good job, ' + name);
    return messages;
}



*/