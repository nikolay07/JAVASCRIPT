let object1 = { name: 'Nik', age: 34 };
let object2 = { name: 'Ni', age: 34 };
let object3 = { name: 'Nik', age: 35 };

const compareObject = (a, b) => {
    // let obj1 = Object.entries(a).reduce((acum, elem) => acum.concat(elem));
    // let obj2 = Object.entries(b).reduce((acum, elem) => acum.concat(elem));
    // return console.log(obj1.every((elem, index) => elem === obj2[index]));


    for (let key in a) {
        if (a.hasOwnProperty(key) === b.hasOwnProperty(key)) {
            console.log(true);
            console.log(a[key].hasOwnProperty(key) == b[key].hasOwnProperty(key));
        } else {
            console.log(false);
        }
    }
}


compareObject(object1, object2);