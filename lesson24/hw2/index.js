//Дни рождения студентов. Функция, группирующая студентов по дню рождения.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
];

export const studentsBirthDays = students => {

    let birthDays = {};
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