import USER_LIST from "./generated";

import FuzzySearch from "fuzzy-search"; 

export default {
    namespaced: true,
    state: {
        list: USER_LIST.map(i => Object.freeze(i)), // чтобы vue не отслеживал каждый объект, накладно
        searchName: "",
        searchColor: "",
    },
    mutations: {
        setUserProp (state, { index, value }) {
           // Vue.set(state.list, index, Object.assign({}, state.list[index], value));
           state.list[index] = Object.assign({}, state.list[index], value);
        },
        searchName (state, text) {
            state.searchName = text;
        },
        searchColor (state, newColor) {
            state.searchColor = newColor !== state.searchColor ? newColor : "" ;
        },
    },
    getters: {
        searcher: ({list}) => {
            return new FuzzySearch(list, ["name"], { // за алгоритм поиска не ручаюсь, юзаю что первым нашел
                caseSensitive: false,
            });
        }, 
        filteredItems: ({ searchName, list, searchColor }, getters) => { 
            return (searchName ? getters.searcher.search(searchName) : list).filter(
                ({ color }) => searchColor ? color === searchColor : true
            );
            
            // традиционный поиск
            // return list.filter(
            //     ({ name }) => search ? name.toLowerCase().includes(search.toLowerCase()) : true
            // ).filter(
            //     ({ color }) => searchColor ? color === searchColor : true
            // );
        },
    },
};
