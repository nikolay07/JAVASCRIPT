//Дни рождения студентов. Функция, группирующая студентов по дню рождения.
// const students = [
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Ann', birthDate: '03/19/2011' },
//     { name: 'Ben', birthDate: '01/21/2009' },
//     { name: 'Sam', birthDate: '03/01/2012' }
// ];

export const studentsBirthDays = students => {
    let birthDays = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];
    students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .map(elem => {

            if (birthDays[months[new Date(elem.birthDate).getMonth()]] === undefined) {
                birthDays[months[new Date(elem.birthDate).getMonth()]] = [];

            }
            birthDays[months[new Date(elem.birthDate).getMonth()]].push(elem.name);
        });
    return birthDays;
};
// console.log(studentsBirthDays(students));
// console.log(students);