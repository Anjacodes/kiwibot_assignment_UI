import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = 'http://localhost:5000/kiwibot-assignment/us-central1/app/api/deliveries'

export const fetchDeliveries = createAsyncThunk('deliveries/fetchDeliveries', async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
})

const initialState = {
  deliveries: [],
  loading: false
}

const deliveriesSlice = createSlice({
  name: 'deliveries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDeliveries.pending]: (state) => {
      state.loading = true;
    },
    [fetchDeliveries.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.deliveries = payload;
    },
    [fetchDeliveries.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const deliveriesReducer = deliveriesSlice.reducer;