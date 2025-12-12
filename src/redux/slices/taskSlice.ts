import { createSlice } from "@reduxjs/toolkit";

export interface addTaskType {
  id: string;
  title: string;
  description: string;
  priority: string;
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
    },
    editTask: (state, action) => {
      state.data.find((s: { id: string }) => s.id === action.payload.id);
    },
    updateTask: (state, action) => {
      const find = state.data.find(
        (s: { id: string }) => s.id === action.payload.id
      );
      if (find) {
        find.title = action.payload.values.questName;
        find.description = action.payload.values.description;
        find.priority = action.payload.values.priority;
        find.deadline = action.payload.values.deadline;
      }
    }
  }
});

export const { addTasks, removeTask, checkedTask, editTask, updateTask } =
  taskSlice.actions;
export const taskReducer = taskSlice.reducer;
