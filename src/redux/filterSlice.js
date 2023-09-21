import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'todos',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
