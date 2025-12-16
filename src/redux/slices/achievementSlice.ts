import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../store";
import { checkedTask } from "./taskSlice";
import { addStat } from "./statSlice";

const storage = [
  {
    id: "1",
    title: "First Quest",
    description: "Complete your first task",
    icon: "🎯",
    unlocked: false
  },
  {
    id: "2",
    title: "Streak Master",
    description: "Reach a 10-task streak",
    icon: "🔥",
    unlocked: false
  },
  {
    id: "3",
    title: "High Achiever",
    description: "Complete 100 tasks",
    icon: "⭐",
    unlocked: false
  },
  {
    id: "4",
    title: "Level 5 Scholar",
    description: "Reach level 50",
    icon: "📚",
    unlocked: false
  },
  {
    id: "5",
    title: "Priority Pro",
    description: "Complete 30 high-priority",
    icon: "💎",
    unlocked: false
  },
  {
    id: "6",
    title: "XP Hunter",
    description: "Earn 1000 total XP",
    icon: "👑",
    unlocked: false
  }
];

const loadInitialState = () => {
  const savedData = localStorage.getItem("studyAchievements");

  return savedData ? JSON.parse(savedData) : storage;
};

const achievementSlice = createSlice({
  name: "achievements",
  initialState: {
    data: loadInitialState()
  },
  reducers: {
    addAchievement: (state, action) => {
      const highPriority = action.payload.tasks.filter(
        (ph: { priority: string; completed: boolean }) =>
          ph.priority === "high" && ph.completed !== false
      ).length;
      const taskCompleted = action.payload.stats.taskCompleted;
      const streak = action.payload.stats.streak;
      const level = action.payload.stats.level;
      const totalXP = action.payload.stats.totalXP;
      if (taskCompleted === 1) {
        state.data[0].unlocked = true;
      } else if (streak === 10) {
        state.data[1].unlocked = true;
      } else if (taskCompleted === 100) {
        state.data[2].unlocked = true;
      } else if (level === 50) {
        state.data[3].unlocked = true;
      } else if (highPriority === 30) {
        state.data[4].unlocked = true;
      } else if (totalXP === 1000) {
        state.data[5].unlocked = true;
      }
    }
  }
});

export const { addAchievement } = achievementSlice.actions;
export const achievementReducer = achievementSlice.reducer;

interface ITask {
  id: string;
  completed: boolean;
  priority: string;
}
// Add This Thunk
// ADD THIS THUNK
export const completeTask =
  (task: ITask) => (dispatch: AppDispatch, getState: () => RootState) => {
    // 1. Mark task as completed
    dispatch(checkedTask({ id: task.id, completed: task.completed }));

    // 2. Update stats
    dispatch(addStat({ priority: task.priority }));

    // 3. Get FRESH state and check achievements
    const state = getState();
    dispatch(
      addAchievement({
        tasks: state.tasks.data,
        stats: state.stats.data
      })
    );
  };
