export const bind = (func, context, arguments) => {
    return function() {
        func.call(this, ...arguments);
    }
}