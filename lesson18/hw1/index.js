export function spy(calls) {
    getWrapper.call = [];

    function getWrapper(...args) {
        getWrapper.call.push(args);
        return func.apply(this, args);
    }

    return getWrapper;
};