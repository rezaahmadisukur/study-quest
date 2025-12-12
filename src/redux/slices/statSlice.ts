import { createSlice } from "@reduxjs/toolkit";

// const initialState = { totalXP: 0, taskCompleted: 0, level: 0, streak: 0 };

const statSlice = createSlice({
  name: "stats",
  initialState: {
    data: JSON.parse(localStorage.getItem("studyStats") || "{}")
  },
  reducers: {
    addStat: (state, action) => {
      const stats = {
        totalXP: state.data.totalXP || 0,
        taskCompleted: state.data.taskCompleted || 0,
        level: state.data.level || 1,
        streak: state.data.steak || 0
      };
      switch (action.payload.priority) {
        case "high":
          state.data.totalXP = stats.totalXP += 50;
          state.data.taskCompleted = stats.taskCompleted += 1;
          break;
        case "medium":
          state.data.totalXP = stats.totalXP += 30;
          state.data.taskCompleted = stats.taskCompleted += 1;
          break;
        default:
          state.data.totalXP = stats.totalXP += 15;
          state.data.taskCompleted = stats.taskCompleted += 1;
      }
      const xpToNextLevel = stats.level * 100;
      const upLevel = Math.floor(stats.totalXP / 100) * 100;

      if (upLevel >= xpToNextLevel) {
        state.data.level = stats.level += 1;
      }

      state.data = stats;
    }
  }
});

export const { addStat } = statSlice.actions;
export const statReducer = statSlice.reducer;
