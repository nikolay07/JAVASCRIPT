export const bind = (func, context, ...argn1, ...argn2) => {
    return function(...argn) {
        func.call(context, ...argn, ...arguments);
    }
};