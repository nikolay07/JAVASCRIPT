const user = {
    name: 'John Doe',
    age: 17,
    interest: 'football'
}
const concatProps = obj => {
    let arr = [];
    for (let key in obj) {
        arr = arr.concat(obj[key]);
        // arr = arr.concat(obj[key])
    }
    return arr;
}
console.log(concatProps(user));


/*
Перебор свойств объектов
 */