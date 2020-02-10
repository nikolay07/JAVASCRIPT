let obj = {};
export function getOwnProps(obj) {
    let propArr = [];
    for (let prop in obj) {
        if (typeof prop !== 'function' && Object.keys(prop)) {
            propArr.push(prop);
        }
    }
    return propArr;
}