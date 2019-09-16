const redux = require('redux')

const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {
    if (action.type === "INC") {
        return {
            ...state,
            counter: state.counter + action.by
        }
    }
    return state
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log("sub:", store.getState())
})

store.dispatch({type: "INC", by: 10})

console.log(store.getState())
