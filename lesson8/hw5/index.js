const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
const addPropertyV2 = (obj, key, value) => {
    let id = {
        [key]: value
    };
    return Object.assign(obj, id)
};

const addPropertyV3 = (obj, key, value) => {
    let id = {
        [key]: value
    };
    return Object.assign({}, obj, id);
};
const addPropertyV4 = (obj, key, value) => {
    let id = {
        [key]: value
    };
    return Object.assign({...obj }, id)
};