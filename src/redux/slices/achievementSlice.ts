import { createSlice } from "@reduxjs/toolkit";

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
    description: "Reach a 5-task streak",
    icon: "🔥",
    unlocked: false
  },
  {
    id: "3",
    title: "High Achiever",
    description: "Complete 10 tasks",
    icon: "⭐",
    unlocked: false
  },
  {
    id: "4",
    title: "Level 5 Scholar",
    description: "Reach level 5",
    icon: "📚",
    unlocked: false
  },
  {
    id: "5",
    title: "Priority Pro",
    description: "Complete 5 high-priority tasks",
    icon: "💎",
    unlocked: false
  },
  {
    id: "6",
    title: "XP Hunter",
    description: "Earn 500 total XP",
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
      const highPriority =
        action.payload.tasks.filter(
          (ph: { priority: string; completed: boolean }) =>
            ph.priority === "high" && ph.completed !== false
        ).length + 1;
      const taskCompleted = action.payload.stats.taskCompleted + 1;
      if (taskCompleted === 1) {
        state.data[0].unlocked = true;
      } else if (taskCompleted === 10) {
        state.data[2].unlocked = true;
      } else if (highPriority === 3) {
        alert(highPriority);
        state.data[4].unlocked = true;
      }
    }
  }
});

export const { addAchievement } = achievementSlice.actions;
export const achievementReducer = achievementSlice.reducer;
