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
  reducers: {},
  selectors: {
    getGigs(state) {
      return state.gigsDatasets;
    },
  },
});

export default gigsSlice.reducer;
export const {} = gigsSlice.actions;
export const { getGigs } = gigsSlice.selectors;
