import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState:{
  selectedUsers: [],
  },
  reducers: {
    setSelectedUsers: (state, action) => {
      state.selectedUsers = action.payload;
    },
  },
});

export const { setSelectedUsers } = userSlice.actions;

export default userSlice.reducer;
