let object1 = { name: 'Nik', age: 34, };
let object2 = { age: 34, name: 'Nik', };

const compareObjects = (obj1, obj2) => {
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2)
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i of arr1) {
        return (obj1[i] !== obj2[i]) ? false : true;
    }
    // JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(compareObjects(object1, object2));