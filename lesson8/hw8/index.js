let keysList = ['name', 'address', 'age'];
let valuesList = ['Bob', 'Ukraine', 34];
const buildObject = (keysList, valuesList) => {
    // let obj = {};
    // for (let i = 0; i < keysList.length; i++) {
    //     for (let j = 0; j < valuesList.length; j++) {
    //         if (i === j) {
    //             obj[keysList[i]] = valuesList[j];
    //         }
    //     }
    // }
    // return obj;

    // let obj = {}
    // keysList.map((elem, index) => obj[elem] = valuesList[index])
    // return obj;

    // let obj = Object.assign(...keysList.map((elem, index) => ({
    //     [elem]: valuesList[index]
    // })));
    // return obj;

    // let obj = Object.assign.apply({}, keysList.map((elem, index) => ({
    //     [elem]: valuesList[index]
    // })));
    // return obj;

    // let obj = keysList.reduce((acum, elem, index) => {
    //     acum[elem] = valuesList[index];
    //     return acum;
    // }, {})
    // return obj;

    let obj = keysList.reduce((acum, elem, index) => ({...acum, [elem]: valuesList[index] }), {})
    return obj;

}

buildObject(keysList, valuesList);
console.log(buildObject(keysList, valuesList));




// let obj = {
//     [keysList.shift()]: valuesList.shift(),
//     [keysList.shift()]: valuesList.shift(),
//     [keysList.shift()]: valuesList.shift(),
// }
// return obj;