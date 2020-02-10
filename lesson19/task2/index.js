let obj = {};
export function getOwnProps(obj) {
    let propArr = [];
    for (let prop in obj) {
        if (typeof prop !== 'function' && Object.keys(obj)) {
            propArr.push(prop);
        }
    }
    return propArr;
}