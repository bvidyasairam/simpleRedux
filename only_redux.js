const { createStore } = require("redux");

const initialState = {
    age: 21
}

const myReducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type == "ADDTYPE") {
        newState.age = newState.age + 1;
    }
    return newState;
}

const store = createStore(myReducer);

console.log("InitialState", store.getState())
store.dispatch({ type: "ADDTYPE" });
console.log("ChangedState", store.getState())