let object1 = { name: 'Nik', age: 34, };
let object2 = { age: 34, name: 'Nik' };
let object3 = { name: 'Nik', age: 35 };

const compareObjects = (obj1, obj2) => {
    //let someNum;
    // if (Object.keys(obj1).length === Object.keys(obj2).length) {
    //     for (let key in obj1) {
    //         for (let k in obj2) {
    //             if (key === k && obj1[key] !== obj2[k]) {
    //                 return false;
    //             } else { someNum = true }
    //         }
    //     }
    // } else { someNum = false }
    let elem1 = [].concat(Object.entries(obj1));
    let elem2 = Object.entries(obj2);
    console.log(elem1);


    // let elem1 = Object.entries(obj1).reduce((acum, elem) => acum.concat(elem));
    // let elem2 = Object.entries(obj2).reduce((acum, elem) => acum.concat(elem));
    // return elem1.every((elem, index) => elem === elem2[index]);

    // JSON.stringify(obj1) === JSON.stringify(obj2);
    //return someNum;

}

console.log(compareObjects(object1, object2));