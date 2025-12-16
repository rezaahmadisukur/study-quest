import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/taskSlice";
import { statReducer } from "./slices/statSlice";
import { achievementReducer } from "./slices/achievementSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from "react-redux";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    stats: statReducer,
    achievements: achievementReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
