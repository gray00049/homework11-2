import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photoArr: []
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      return {
        ...state,
        photoArr: [...state.photoArr, action.payload]
      }
    }
  }
})

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;