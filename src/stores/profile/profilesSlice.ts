import { TalentProfiles } from '@/data/talent-profile';
import { TTalentProfiles } from '@/types/Talent-profile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  profilesData: TTalentProfiles
  selectedCategory: string | null,
  location: string | null,
  skill: string | null,
  platform: string | null
}
const initialState: IInitialState = {
  profilesData: TalentProfiles,
  selectedCategory: null,
  location: null,
  skill: null,
  platform: null
}

// Create the slice and pass in the initial state
const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
    setLocation(state, action: PayloadAction<string | null>) {
      state.location = action.payload;
    },
    setSkill(state, action: PayloadAction<string | null>) {
      state.skill = action.payload;
    },
    setPlatform(state, action: PayloadAction<string | null>) {
      state.platform = action.payload;
    },
    resetFilters(state) {
      state.selectedCategory = null;
      state.location = null;
      state.skill = null;
      state.platform = null
    },
  }
})

// Export the generated reducer function
export default profilesSlice.reducer