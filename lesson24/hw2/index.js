//Дни рождения студентов. Функция, группирующая студентов по дню рождения.
const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ann', birthDate: '03/19/2013' },
    { name: 'Ben', birthDate: '01/21/2009' },
    { name: 'Sam', birthDate: '03/01/2012' }
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
];
export const studentsBirthDays = students => {
    let groupByBirthMonth = students
        .sort((a, b) => { new Date(b.birthDate).getDate() - new Date(a.birthDate).getDate() })
        .reduce((acc, { name, birthDate }) => {
            const birthMonth = months[new Date(birthDate).getMonth()];
            return {...acc, [birthMonth]: acc[birthMonth] ? acc[birthMonth].concat(name) : [name] };
        }, {});
    return groupByBirthMonth;
};
console.log(studentsBirthDays(students));
console.log(students);