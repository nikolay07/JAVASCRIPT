// let object1 = { name: 'Nik', age: 34 };
// let object2 = { name: 'Nik', age: 34 };
// let object3 = { name: 'Nik', age: 35 };

const compareObjects = (obj1, obj2) => {
    let elem1 = Object.entries(obj1).reduce((acum, elem) => acum.concat(elem));
    let elem2 = Object.entries(obj2).reduce((acum, elem) => acum.concat(elem));
    return elem1.every((elem, index) => elem === elem2[index]);

}

// console.log(compareObjects(object1, object2));