const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray) return null;
    return arr.map(elem => elem % 2 === 0 ? elem + delta : elem);
};