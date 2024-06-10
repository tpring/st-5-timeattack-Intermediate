// TODO: todoSlice 를 작성하세요.
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {},
    reducers: {
        addTodo: (state, action) => {
            state.Todo += action.payload;
        },
        toggleTodo: (state, action) => {
            const todo = state.Todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        },
        deleteTodo: (state, action) => {
            state.Todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
