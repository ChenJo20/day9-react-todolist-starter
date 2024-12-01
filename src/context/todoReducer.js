export const initialState = [];

export const ActionType = {
    "ADD": "ADD",
    "CHANGEDONESTATUS": "CHANGEDONESTATUS",
    "REMOVE": "REMOVE",
    "INIT": "INIT",
    "UPDATETEXT": "UPDATETEXT"
}
export const todoReducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD:
            return [...state, action.payload];
        case ActionType.CHANGEDONESTATUS:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case ActionType.REMOVE:
            return state.filter(todo => todo.id !== action.payload);
        case ActionType.INIT:
            return action.payload;
        case ActionType.UPDATETEXT:
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            );
        default:
            return state;
    }
};