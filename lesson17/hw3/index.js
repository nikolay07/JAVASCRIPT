export const bind = (func, context, arg1, arg2) => {
    return function(...argn) {
        func.call(context, ...arguments, ...argn);
    }
};