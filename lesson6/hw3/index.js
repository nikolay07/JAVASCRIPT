const checkSum = (arr) => {
    if (!Array.isArray) {
        return null;
    }
    return arr.reduce((acc, elem) => acc + elem) > 100 ? true : false;
};