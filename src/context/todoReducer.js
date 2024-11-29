export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'CHANGEDONESTATUS':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload);
        case 'INIT':
            return action.payload;
        case 'UPDATETEXT':
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            );
        default:
            return state;
    }
};