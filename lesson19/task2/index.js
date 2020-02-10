let obj = {};

function getOwnProps(obj) {
    for (let prop in obj) {
        console.log(Object.keys(obj));
    }
}