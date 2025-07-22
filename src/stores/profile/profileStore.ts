// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type ProfileState = {
  count: number
}

export type ProfileActions = {
  decrementCount: () => void
  incrementCount: () => void
}

export type ProfileStore = ProfileState & ProfileActions

export const initProfileStore = (): ProfileState => {
  return { count: new Date().getFullYear() }
}

export const defaultInitState: ProfileState = {
  count: 0,
}

export const createProfileStore = (
  initState: ProfileState = defaultInitState,
) => {
  return createStore<ProfileStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }))
}
