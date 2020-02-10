let obj = {};
export function getOwnProps(obj) {
    let propArr = [];
    for (let prop in obj) {
        if (typeof prop !== 'function' && obj.hasOwnProperty(prop)) {
            propArr.push(prop);
        }
    }
    return propArr;
}