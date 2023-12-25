import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const studyAbroadSlice = createSlice({
    name: 'studentAbroad',
    initialState,
    reducers: {
        add_post: () => {
            console.log('working fine')
        }
    }

});


export const { add_post } = studyAbroadSlice.actions;
export default studyAbroadSlice.reducer;
