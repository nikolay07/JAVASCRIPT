export const bind = (func, context, arg) => {
    return function(arg1, arg2) {
        func.call(this, ...arguments);
    }
};