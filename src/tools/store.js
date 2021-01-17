import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import users from "./users";

export default new Vuex.Store({
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
