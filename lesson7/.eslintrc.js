module.exports = {
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
};