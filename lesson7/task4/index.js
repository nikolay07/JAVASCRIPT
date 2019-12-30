const getMessagesForBestStudents = (allStudentsNames, failedStudentsNames) =>
    allStudentsNames
    .filter(name => !failedStudentsNames.includes(name))
    .map(name => 'Good job, ' + name);
const allStudentsNames = ['a', 'b', 'c', 'd'];
const failedStudentsNames = ['c', 'd'];