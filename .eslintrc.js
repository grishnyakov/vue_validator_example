module.exports = {
    env: {
        "es6": true,
        "node": true,
        "cypress/globals": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    plugins: [
        "cypress"
    ],
    rules: {
        "no-console": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
    }
};