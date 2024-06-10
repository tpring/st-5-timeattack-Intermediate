// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        Result: 0,
    },
    reducers: {
        add: (state, action) => {
            state.Result += action.payload;
        },
        subtract: (state, action) => {
            state.Result -= action.payload;
        },
        setResult: (state, action) => {
            state.Result = action.payload;
        },
    },
});

export const { add, subtract, setResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;
