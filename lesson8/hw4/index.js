const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
};

const addPropertyV2 = (userData, userId) => {
    let id = { id: userId };
    return Object.assign(userData, id)
};

const addPropertyV3 = (userData, userId) => {
    let id = { id: userId };
    return Object.assign({}, userData, id)
};

const addPropertyV4 = (userData, userId) => {
    let id = { id: userId };
    return Object.assign({...userData }, id)
};