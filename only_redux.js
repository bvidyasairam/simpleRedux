const { createStore } = require("redux"); //CreateStore from redux

const initialState = {
    value: 0
}

const myReducer = (state = initialState, action) => { //Reducer
    const newState = { ...state };
    if (action.type == "ADDTYPE") {
        newState.value = newState.value + 1;
    }
    return newState;
}

const store = createStore(myReducer); // It is important to note Store always has state and Reducer

console.log("InitialState", store.getState())
store.dispatch({ type: "ADDTYPE" }); //Action - Dispatching value to reducer present inside the store, which updates the value
console.log("ChangedState", store.getState()) // get state is used to get the state of the store
