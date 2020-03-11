export const getSubArray = (arr, n) => {
    let newArr = [];
    arr.length = n;
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}