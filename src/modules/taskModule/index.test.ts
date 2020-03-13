import taskModule, { addTask, deleteTask } from 'modules/taskModule'

describe('taskModule', () => {
  it('addTask：タスクが正常に追加できる', () => {
    const state = {
      tasks: [],
      nextTaskId: 0,
    }
    const task = 'テストを学ぶ'
    const result = taskModule.reducer(state, addTask(task))
    const expected = {
      tasks: [{ id: 0, text: task }],
      nextTaskId: 1,
    }

    expect(result).toEqual(expected)
  })

  it('deleteTask：IDと順番が一致した時に削除できる', () => {
    const taskId = 0
    const state = {
      tasks: [{ id: taskId, text: 'テストを学ぶ' }],
      nextTaskId: 1,
    }
    const result = taskModule.reducer(state, deleteTask(taskId))
    const expected = {
      tasks: [],
      nextTaskId: 1,
    }

    expect(result).toEqual(expected)
  })
  it('deleteTask：IDと順番が不一致の時に削除できる', () => {
    const taskId = 2
    const state = {
      tasks: [
        { id: taskId, text: 'Reactを学ぶ' },
        { id: 3, text: 'Reduxを学ぶ' },
      ],
      nextTaskId: 4,
    }
    const result = taskModule.reducer(state, deleteTask(taskId))
    const expected = {
      tasks: [{ id: 3, text: 'Reduxを学ぶ' }],
      nextTaskId: 4,
    }

    expect(result).toEqual(expected)
  })
})
