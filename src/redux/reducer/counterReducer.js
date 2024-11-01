import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseCount: (state, action) => {
            console.log("increaseCount state", state)
            state.count = state.count + 1
        },
        decreaseCount: (state, action) => {
            console.log("decreaseCount state", state)
            state.count = state.count - 1
            // state.count = action.payload - 1
        },
    }

})

export const {increaseCount, decreaseCount} = counterSlice.actions

export default counterSlice.reducer;



// import { INCREASE_COUNTER, DECREASE_COUNTER } from "../action/counterActions";
// const initialState = {
//     counter: 0,
// };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREASE_COUNTER: {
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             }
//         }
//         case DECREASE_COUNTER: {
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             }
//         }
//         default: {
//             return state;
//         }
//     }
// }

// export default counterReducer;