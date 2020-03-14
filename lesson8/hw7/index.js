let obj1 = { name: 'Nik', age: 34 };
let obj2 = { name: 'Nik', age: 34 };
let obj3 = { name: 'Nik', age: 35 };

const compareObject = (obj1, obj2) => {
    // console.log(Object.keys(obj1));
    // console.log(Object.values(obj1));
    if (obj1 === obj1) {
        return true;
    } else { return false }
}
console.log(compareObject(obj1, obj2));