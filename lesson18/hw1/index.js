export function spy() {
    function getWrapper(...args) {
        getWrapper.calls.push(args);
        return func.apply(this, args);
    }
    getWrapper.calls = [];
    return getWrapper;
};