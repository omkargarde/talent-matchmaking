import { TalentProfiles } from "@/data/talent-profile";
import { TTalentProfiles } from "@/types/Talent-profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TSelectedCategory = string | null;
type TLocation = string | null;
type TSkill = string | null;
type TPlatform = string | null;

interface IInitialState {
  profilesData: TTalentProfiles;
  selectedCategory: TSelectedCategory;
  location: TLocation;
  skill: TSkill;
  platform: TPlatform;
}

const initialState: IInitialState = {
  profilesData: TalentProfiles,
  selectedCategory: null,
  location: null,
  skill: null,
  platform: null,
};

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<TSelectedCategory>) {
      state.selectedCategory = action.payload;
    },
    setLocation(state, action: PayloadAction<TLocation>) {
      state.location = action.payload;
    },
    setSkill(state, action: PayloadAction<TSkill>) {
      state.skill = action.payload;
    },
    setPlatform(state, action: PayloadAction<TPlatform>) {
      state.platform = action.payload;
    },
    resetFilters(state) {
      state.selectedCategory = null;
      state.location = null;
      state.skill = null;
      state.platform = null;
    },
  },
  selectors: {
    getProfiles(state) {
      return state.profilesData;
    },
    getFilteredProfiles(state) {
      return state.profilesData.filter((profile) => {
        const matchesCategory =
          state.selectedCategory === null ||
          profile.categories.includes(state.selectedCategory);

        const matchesLocation =
          state.location === null || profile.city === state.location;

        const matchesSkill =
          state.skill === null || profile.skills.includes(state.skill);

        const matchesPlatform =
          state.platform === null || profile.platforms.includes(state.platform);

        return (
          matchesCategory && matchesLocation && matchesSkill && matchesPlatform
        );
      });
    },
    getProfileLocations(state) {
      return Array.from(
        new Set(
          state.profilesData.map((profile) => {
            return profile.city || profile.hometown;
          }),
        ),
      );
    },
    getProfileSkills(state) {
      return Array.from(
        new Set(state.profilesData.flatMap((profile) => profile.skills)),
      );
    },
  },
});

export default profilesSlice.reducer;
export const {
  setSelectedCategory,
  setLocation,
  setPlatform,
  setSkill,
  resetFilters,
} = profilesSlice.actions;
export const {
  getProfiles,
  getFilteredProfiles,
  getProfileLocations,
  getProfileSkills,
} = profilesSlice.selectors;
