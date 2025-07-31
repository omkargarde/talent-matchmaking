import { createSlice } from "@reduxjs/toolkit";
import { TGigsDatasets } from "@/types/data.types";
import { GigsDataset } from "@/data/gigs-dataset";

interface IInitialState {
  gigsDatasets: TGigsDatasets;
}

const initialState: IInitialState = {
  gigsDatasets: GigsDataset,
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
