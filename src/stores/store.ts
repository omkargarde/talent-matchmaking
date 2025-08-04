"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import profileReducer from "@/stores/profile/profilesSlice";
import gigsReducer from "@/stores/gigs/gigsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      profiles: profileReducer,
      gigs: gigsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
