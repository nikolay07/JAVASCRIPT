let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = function() {
        return i;
    }
}

export { arr };