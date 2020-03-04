//Дни рождения студентов. Функция, группирующая студентов по дню рождения.
const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ann', birthDate: '03/19/2011' },
    { name: 'Ben', birthDate: '01/21/2009' },
    { name: 'Sam', birthDate: '03/01/2012' }
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
];

export const studentsBirthDays = students => {
    let studentByBirthMonth = {};
    [...students].sort((a, b) => { new Date(b.birthDate).getDate() - new Date(a.birthDate).getDate() })
        .map(elem => {
            if (studentByBirthMonth[months[new Date(elem.birthDate).getMonth()]] === undefined) {
                studentByBirthMonth[months[new Date(elem.birthDate).getMonth()]] = [];
            }
            studentByBirthMonth[months[new Date(elem.birthDate).getMonth()]].push(elem.name)
        });
    return studentByBirthMonth;
}
console.log(studentsBirthDays(students));
console.log(students);