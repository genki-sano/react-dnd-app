import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask } from 'modules/taskModule'
import { State } from 'types'

export const useCounter = () => {
  const dispatch = useDispatch()
  const taskSelector = (state: State) => state.task

  return {
    ...useSelector(taskSelector),
    addTask: (text: string) => dispatch(addTask(text)),
    deleteTask: (id: number) => dispatch(deleteTask(id)),
  }
}
