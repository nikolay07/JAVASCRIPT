export const bind = (func, context, argn1, arg2) => {
    return function() {
        func.apply(this, arguments);
    }
};
const fixCont = {
    fixedArg() {
        console.log(`${this}`);
    }
}
const newBind = bind(fixCont.fixedArg);
newBind.call();