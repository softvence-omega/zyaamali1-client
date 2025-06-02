
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Business {
    id: string;
    name: string;
    description: string;
    goal: string;
}

interface BusinessState {
    businesses: Business[];

}

const initialState: BusinessState = {
    businesses: [
        // Initial data
        {
            id: '',
            name: '',
            description: '',
            goal: '',
        },
    ],
};

const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        addBusiness: (state, action: PayloadAction<Omit<Business, 'id'>>) => {
            // Generate a simple ID. In a real app, this might come from a backend.
            const newId = (state.businesses.length > 0
                ? Math.max(...state.businesses.map(b => parseInt(b.id))) + 1
                : 1
            ).toString();
            state.businesses.push({ ...action.payload, id: newId });
        },
        updateBusiness: (state, action: PayloadAction<Business>) => {
            const index = state.businesses.findIndex(
                (business) => business.id === action.payload.id
            );
            if (index !== -1) {
                state.businesses[index] = action.payload;
            }
        },
        deleteBusiness: (state, action: PayloadAction<string>) => {
            state.businesses = state.businesses.filter(
                (business) => business.id !== action.payload
            );
        },
    },
});

export const { addBusiness, updateBusiness, deleteBusiness } = businessSlice.actions;

export default businessSlice.reducer;