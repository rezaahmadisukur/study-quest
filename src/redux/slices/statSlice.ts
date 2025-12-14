import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalXP: 0,
  taskCompleted: 0,
  level: 1,
  streak: 0
};

const loadInitialState = () => {
  const savedData = localStorage.getItem("studyStats");

  return savedData ? JSON.parse(savedData) : initialState;
};

const statSlice = createSlice({
  name: "stats",
  initialState: {
    data: loadInitialState()
  },
  reducers: {
    addStat: (state, action) => {
      switch (action.payload.priority) {
        case "high":
          state.data.totalXP += 50;
          state.data.taskCompleted += 1;
          break;
        case "medium":
          state.data.totalXP += 30;
          state.data.taskCompleted += 1;
          break;
        default:
          state.data.totalXP += 15;
          state.data.taskCompleted += 1;
      }
      const xpToNextLevel = state.data.level * 100;
      const upLevel = Math.floor(state.data.totalXP / 100) * 100;

      if (upLevel >= xpToNextLevel) {
        state.data.level += 1;
      }
    }
  }
});

export const { addStat } = statSlice.actions;
export const statReducer = statSlice.reducer;
