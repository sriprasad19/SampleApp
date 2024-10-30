import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../action/homeActions";

const initialState = {
    user: null,
    loading: false,
    error: null,
    data: null
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log("state", state)
            console.log("action", action)
            state.user = action.payload
        },
        setLoading: () => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: builder => {
        console.log("builder", builder)
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("action.payload", action.payload)
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = ''
        })
    }

})

export const { setUser, setLoading, setError } = homeSlice.actions

export default homeSlice.reducer;