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
    }
  }
});

export const { addTasks } = taskSlice.actions;
export default taskSlice.reducer;
