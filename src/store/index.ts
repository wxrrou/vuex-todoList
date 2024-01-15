import { createStore } from 'vuex'

export default createStore({
    state: {
        todoList: [
            {
                id: 1,
                title: "One",
                done: true,
            },
            {
                id: 2,
                title: "Two",
                done: false,
            },
            {
                id: 3,
                title: "Three",
                done: false,
            },
        ]
    },
    getters: {
        todoList: (state) => state.todoList,
    },
    mutations: {},
    actions: {},
    modules: {}
})