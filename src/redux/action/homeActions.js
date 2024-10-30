import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// console.log("fetchUsers 123")
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     console.log("fetchUsers 123")
//     const response = await fetch('https://reqres.in/api/users?delay=1');
//     return await response.json().data;
//   });
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    console.log("fetchUsers")
    try {
        const response = await axios.get('https://reqres.in/api/users?delay=1', { responseType: 'json' })
        const data = response?.data?.data
        console.log("data", data)
        return data
    } catch (error) {
        console.log("error", error)
    }
});

// export let INCREASE_COUNTER = 'INCREASE_COUNTER';
// export let DECREASE_COUNTER = 'DECREASE_COUNTER'

// export const increaseCounter = () => ({
//     type: INCREASE_COUNTER
// })

// export const decreaseCounter = () => ({
//     type: DECREASE_COUNTER
// })

    // const requestOptions = {
    //     method: "GET",
    //     // headers: { "Content-Type": "application/json" },
    //     // body: JSON.stringify(data),
    //   };
    // try {
    //     const res = await fetch("https://reqres.in/api/users?delay=1'", requestOptions);
    //         console.log("RESPONSE:", res);
    //         const data = await res.json();
    //         return data;
    // } catch (error) {
        
    // }