import React from 'react'
import type { TaskI } from '../types/taskType'

type TaskItemProps = {
  task: TaskI
  onRefresh: () => void
  showCompleteCheckbox: boolean
  onEdit: () => void
}

const TaskItem = ({
  task,
  onRefresh,
  showCompleteCheckbox,
  onEdit,
}: TaskItemProps) => {
  return <div>TaskItem</div>
}

export default TaskItem
