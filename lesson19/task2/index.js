let obj = {};
export function getOwnProps(obj) {
    for (let prop in obj) {
        if (typeof prop !== 'function') {
            return Object.keys(obj);
        }
    }
}