// let keysList = ['name', 'address', 'age'];
// let valuesList = ['Bob', 'Ukraine', 34];
buildObject = (keysList, valuesList) => {
    // let obj = keysList.reduce((acum, elem, index) => ({
    //     ...acum,
    //     [elem]: index
    // }), {})

    let obj = {};
    for (let i = 0; i < keysList.length; i++) {
        for (let j = 0; j < valuesList.length; j++) {
            if (i === j) {
                obj[keysList[i]] = valuesList[j];
            }
        }
    }
    return obj;
}

// buildObject(keysList, valuesList);
// console.log(buildObject(keysList, valuesList));