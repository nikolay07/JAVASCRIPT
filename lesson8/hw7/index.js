// let object1 = { name: 'Nik', age: 34 };
// let object2 = { name: 'Nik', age: 34 };
// let object3 = { name: 'Nik', age: 35 };

const compareObject = (a, b) => {
    let obj1 = Object.entries(a).reduce((acum, elem) => acum.concat(elem));
    let obj2 = Object.entries(b).reduce((acum, elem) => acum.concat(elem));
    return obj1.every((elem, index) => elem === obj2[index]);

}

// console.log(compareObject(object1, object2));