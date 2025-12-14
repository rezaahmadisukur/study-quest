import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/taskSlice";
import { statReducer } from "./slices/statSlice";
import { achievementReducer } from "./slices/achievementSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    stats: statReducer,
    achievements: achievementReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
