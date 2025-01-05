import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url_api = "https://gahi-said.com/apis/vols.php";

// Connect to the API
export const fetchFlights = createAsyncThunk(
    'flights/fetchFlights',
    async () => {
        const response = await axios.get(url_api);
        return response.data;
    }
);

const flightsSlice = createSlice({
    name: 'vols',
    initialState: {
        vols: [],
        status: "idle",
        error: null,
    },

    reducers: {
        updateFlightServices: (state, action) => {
            const updatedFlight = action.payload;
            const index = state.vols.findIndex(flight => flight.id === updatedFlight.id);
            if (index !== -1) {
                state.vols[index] = updatedFlight;
            }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchFlights.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFlights.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.vols = action.payload;
            })
            .addCase(fetchFlights.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { updateFlightServices } = flightsSlice.actions;

export default flightsSlice.reducer;
