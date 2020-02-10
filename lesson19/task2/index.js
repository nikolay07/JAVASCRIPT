let obj = {};

export function getOwnProps(obj) {
    for (let prop in obj) {
        console.log(Object.keys(obj));
    }
}