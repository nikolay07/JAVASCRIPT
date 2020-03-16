// let object1 = { name: 'Nik', age: 34, };
// let object2 = { age: 34, name: 'Nik', };
// let object3 = { name: 'Nik', age: 35 };

const compareObjects = (obj1, obj2) => {
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2)
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i of arr1) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;
    // JSON.stringify(obj1) === JSON.stringify(obj2);
}

// console.log(compareObjects(object1, object2));







// let elem1 = Object.entries(obj1).reduce((acum, elem) => acum.concat(elem));
// let elem2 = Object.entries(obj2).reduce((acum, elem) => acum.concat(elem));
// return elem1.every((elem, index) => elem === elem2[index]);