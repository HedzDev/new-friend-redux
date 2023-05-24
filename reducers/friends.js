import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value,
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducer: {},
});

export const { addFriendsToStore } = friendsSlice.actions;
export default friendsSlice.reducer;
