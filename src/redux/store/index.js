import { configureStore } from '@reduxjs/toolkit'
import studentAbroad from '../features/studyAbroadSlice';

const store = configureStore({
    reducer: {
        studentAbroad: studentAbroad
    }
});

export default store