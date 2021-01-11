module.exports = {
    env: {
        "es6": true,
        "node": true,
        "cypress/globals": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential",
        "vuetify"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    plugins: [
        "vuetify",
        "cypress"
    ],
    rules: {
        "no-console": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "vuetify/no-deprecated-classes": "error"
    }
};