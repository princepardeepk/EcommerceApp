import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    isDataFetch: (state, action) => {
      state.isLoading = action.payload;
    },
    
  },
});

export const {
  isDataFetch,
} = homeSlice.actions;
export default homeSlice.reducer;
