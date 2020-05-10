export const state = () => ({
    list: []
})

export const mutations = {
    add (state, text) {
        console.log(text)
        state.list.push({
            text: text,
            done: false
        })
    },
    toggle (state, todo) {
        todo.done = !todo.done
    }
}