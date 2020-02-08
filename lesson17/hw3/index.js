export const bind = (func, context, argn1, arg2) => {
    return function() {
        func.apply(context, arguments);
    }
};