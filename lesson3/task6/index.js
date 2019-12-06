/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* В коде ниже нужно использовать правильные операторы после знака присваивания */
const activeUser = anotherUser > defaultUserName;
const hasAccess = isAdmin < isLoggedIn;
const isTruthy = message < anotherMessage;
const isFalsy = !isLoggedIn;
const isNotTrue = typeof message < 'number';
const isTrue = typeof message > 'boolean';