import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task, TaskState } from 'types/task'

const taskInitialState: TaskState = {
  tasks: [],
  nextTaskId: 0,
}

const listModule = createSlice({
  name: 'task',
  initialState: taskInitialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.nextTaskId++,
        text: action.payload,
      })
    },
    deleteTask: (state: TaskState, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task: Task) => {
        return task.id !== action.payload
      })
    },
  },
})

export const { addTask, deleteTask } = listModule.actions

export default listModule
