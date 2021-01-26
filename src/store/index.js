import { createStore } from 'vuex'

import users from "./users";

export default createStore({
    strict: process.env.NODE_ENV !== "production",
    plugins: [],
    modules: {
        users
    },
    state: {},
    actions: {},
    getters: {},
    mutations: {},
});
