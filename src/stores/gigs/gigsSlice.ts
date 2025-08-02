import { createSlice } from "@reduxjs/toolkit";
import { GigsDataset } from "@/data/gigs-dataset";

const initialState = {
  gigsDatasets: GigsDataset,
  searchTerm: "",
  selectedCategory: "",
  selectedCity: "",
  selectedState: "",
};

const gigsSlice = createSlice({
  name: "gigs",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },

    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
  selectors: {
    getGigs(state) {
      return state.gigsDatasets;
    },
  },
});

export default gigsSlice.reducer;
export const {
  setSearchTerm,
  setSelectedCategory,
  setSelectedState,
  setSelectedCity,
} = gigsSlice.actions;
export const { getGigs } = gigsSlice.selectors;
