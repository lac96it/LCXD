import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';

// export const fetchhome = createAsyncThunk(
//   'home/fetchhome',
//   (params, thunkAPI) => {
//     return priceApi.fetchCurrenthome();
//   }
// );

const initialState = {
  
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

  },
  extraReducers: {
    
  }
});

export const homeAction = homeSlice.actions;

const homeReducer = homeSlice.reducer;

export default homeReducer;
