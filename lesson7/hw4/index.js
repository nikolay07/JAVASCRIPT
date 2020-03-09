const cloneArr = (arr) => {
    return !Array.isArray(arr) ? null : arr.slice();
};