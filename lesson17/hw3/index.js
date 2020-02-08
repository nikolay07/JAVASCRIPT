export const bind = (func, context, argn1) => {
    return function(argn2) {
        func.call(context, ...argn1, ...argn2);
    }
};