// const students = [
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Ben', birthDate: '01/21/2009' },
//     // { name: 'Sam', birthDate: '04/01/2012' }
// ];
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
//     'Oct', 'Nov', 'Dec',
// ];
// const studentsBirthDays = students => {
//     const groupByBirthMonth = {};
//     const copyStudents = [];
//     for (let people of students) {
//         copyStudents.push(Object.assign({}, people));
//     }
//     copyStudents.sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))

//     let month;
//     for (let people of copyStudents) {
//         const getNormalData = new Date(people.birthDate);
//         const getMonth = getNormalData.getMonth();
//         month = months[getMonth];
//         if (groupByBirthMonth[month]) {
//             groupByBirthMonth[month].push(people.name);
//         } else {
//             groupByBirthMonth[month] = [];
//             groupByBirthMonth[month].push(people.name);
//         }
//         // groupByBirthMonth[month] = [];


//     }
//     groupByBirthMonth

//     console.log(month);
//     return groupByBirthMonth;
// };
// studentsBirthDays(students);
// { Jan: ['Tom', 'Ben'], Mar: ['Sam'] },


const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/21/2009' },
    { name: 'Sam', birthDate: '04/01/2012' },
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
];

function studentsBirthDays(students) {
    const arrStudents = students.slice();
    const result = arrStudents
        .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .reduce((acc, { name, birthDate }) => {
            const month = months[new Date(birthDate).getMonth()];
            return {...acc, [month]: acc[month] ? acc[month].concat(name) : [name] };
        }, {});
    return result;
};
console.log(studentsBirthDays(students));
console.log(students);