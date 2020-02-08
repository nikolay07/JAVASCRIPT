export const bind = (func, context, ...argn) => {
    return function() {
        func.call(context, ...arguments);
    }
};