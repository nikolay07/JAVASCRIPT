export function spy(call) {
    function getWrapper(...args) {
        getWrapper.calls.push(args);
        return func.apply(this, args);
    }
    getWrapper.calls = [];
    return getWrapper;
};
console.log(spy());