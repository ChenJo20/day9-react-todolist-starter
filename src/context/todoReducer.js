export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {id: Date.now(), text: action.payload, done: false}];
        case 'CHANGEDONESTATUS':
            return state.map((todo, _) => {
                if (todo.id === action.payload) {
                    return {id: todo.id, text: todo.text, done: !todo.done}
                }
                return todo;
            })
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};