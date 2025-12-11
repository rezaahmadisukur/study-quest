import { createSlice } from "@reduxjs/toolkit";

export interface addTaskType {
  id: string;
  title: string;
  description: string;
  priority: string;
  category: string;
  deadline: string;
  completed: boolean;
  createdAt: string;
}

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    data: JSON.parse(localStorage.getItem("studyTasks") || "[]")
  },
  reducers: {
    addTasks: (state, action) => {
      const formData: addTaskType = {
        id: Date.now().toString(),
        title: action.payload.questName,
        description: action.payload.description,
        priority: action.payload.priority,
        category: action.payload.category,
        deadline: action.payload.deadline,
        completed: false,
        createdAt: new Date().toISOString()
      };
      state.data.push(formData);
    },
    removeTask: (state, action) => {
      state.data = state.data.filter(
        (s: { id: string }) => s.id !== action.payload.id
      );
    },
    checkedTask: (state, action) => {
      const find = state.data.find(
        (s: { id: string }) => s.id === action.payload.id
      );
      find.completed = true;
    }
  }
});

export const { addTasks, removeTask, checkedTask } = taskSlice.actions;
export default taskSlice.reducer;
